from flask import Blueprint, render_template, request, jsonify, redirect
from flask_login import login_required,current_user  
from app import db
import random
import string
from datetime import datetime
from flask import flash
import ast

from core.models import *


customers_bp = Blueprint('customers', __name__, template_folder='templates/customers')

def generate_package_id():
    characters = string.ascii_letters + string.digits
    package_id = ''.join(random.choices(characters, k=8))
    return package_id

@customers_bp.route('/packages')
@login_required
def packages():

    packages = Package.query.filter_by(user_id=current_user.id).all()

    pickups = PickupLocation.query.all()
    pickups = PickupLocation.query.all()
    pickup_data = [{'id': pickup.location_id, 'address': pickup.address, 'postcode': pickup.postcode, 'city': pickup.city} for pickup in pickups]

    filtered_pickup = {}
    # Iterate over each pickup location
    for pickup_location in pickups:
        # Evaluate the timeslots attribute as a dictionary
        timeslots_dict = eval(pickup_location.timeslots)
        print(timeslots_dict)
        # Check if 'TRE' exists in the timeslots dictionary
        if timeslots_dict:
            # Append the pickup location to the filtered list
            filtered_pickup[pickup_location.location_id]=[]

            for slot, status in timeslots_dict.items():
                if status:
                    filtered_pickup[pickup_location.location_id].append(slot)

    return render_template('customers/packages.html',packages=packages, pickups=pickup_data, filtered_pickup=filtered_pickup)


@customers_bp.route('/packages/create', methods=['POST'])
@login_required
def create_package():
    if request.method == 'POST':
        # Extract form data
        description = request.form.get('description')
        size = request.form.get('size')
        weight = request.form.get('weight')
        pickup_location = request.form.get('pickupLocation')
        schedule_time = request.form.get('scheduleTime')
        schedule_date = request.form.get('scheduleDate')
        pickup_location_id = request.form.get('pickupLocationId')
        pickup = PickupLocation.query.get(pickup_location_id)

        # update = ast.literal_eval(pickup.timeslots)

        # update[schedule_time]=False

        # pickup.timeslots=str(update)
        # db.session.commit()

        package_id = generate_package_id()

        # Create a new Package object
        package = Package(
            user_id=current_user.id,
            package_id= package_id,
            description=description,
            size=size,
            weight=weight,
            slot_id=pickup_location_id,
            pickuploc=pickup_location,
            schedule_time=schedule_date+ " " +schedule_time
        )

        # try:
            # Add the new package to the database
        db.session.add(package)
        db.session.commit()
        return jsonify({"message": "Package created successfully"}), 201
        # except Exception as e:
        #     # Handle errors
        #     return jsonify({"error": str(e)}), 500


@customers_bp.route('/support', methods=['GET', 'POST'])
@login_required
def support():
    if request.method == 'POST':
        # Extract form data
        name = request.form.get('name')
        feedback_type = request.form.get('feedback_type')
        description = request.form.get('description')
        email = request.form.get('email')
        phone = request.form.get('phone')
        ticketid=generate_package_id()
        # Create a new Ticket object
        ticket = SupportTicket(
            ticketid=ticketid,
            name=name,
            issue_description= feedback_type + ": " + description,
            email=email,
            phone=phone,
            user_id=current_user.id  # Assuming current_user is available
        )

        # Add the Ticket object to the database session
        db.session.add(ticket)
        
        # Commit the changes to the database
        db.session.commit()
        flash('Feedback created successfully!', 'success')
        # Redirect to a success page or route
        return redirect("/support")  # Change 'success_page' to the name of your success page/route
    tickets = SupportTicket.query.filter_by(user_id=current_user.id).all()
    # Render the support page template for GET requests
    return render_template('customers/support.html',tickets=tickets)


