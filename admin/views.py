from flask import Blueprint, render_template, redirect, url_for, jsonify
from flask_login import current_user, login_required
from core.models import *
from flask import flash

admin_bp = Blueprint('admin', __name__, template_folder='templates/admin')

@admin_bp.route('/admin/dashboard')
@login_required
def customer_dashboard():
    if current_user.is_authenticated and current_user.admin:
        # Query all the required numbers
        num_packages = Package.query.count()
        num_delivered = Package.query.filter_by(status='Delivered').count()
        num_users = User.query.filter_by(admin=False).count()
        num_feedbacks = SupportTicket.query.count()

        if num_packages > 0:
            percentage_delivered = (num_delivered / num_packages) * 100
        else:
            percentage_delivered = 0
        # Pass the numbers to the template
        return render_template('admin/dashboard.html', num_packages=num_packages, 
                               num_delivered=num_delivered, num_users=num_users, 
                               num_feedbacks=num_feedbacks, percentage_delivered=percentage_delivered)
    else:
        return redirect("/login")  # Assuming your login route is named 'auth.login'


@admin_bp.route('/admin/packages')
@login_required
def packages():
    if current_user.is_authenticated and current_user.admin:
        # Query all packages
        all_packages = Package.query.all()

        # Pass the packages to the template
        return render_template('admin/packages.html', packages=all_packages)
    else:
        return redirect("/login")  # Assuming your login route is named 'auth.login'
    
from flask import request

@admin_bp.route('/admin/save/package/<id>', methods=['POST'])
@login_required
def save_package(id):
    if current_user.is_authenticated and current_user.admin:
        # Get the ID of the package to update
        package_id = id
        print(request.json)
        # Get the new status from the request
        new_status = request.json[package_id]

        # Update the package with the new status (this is a placeholder)
        # You need to replace this with your actual logic to update the package
        # For example:
        package = Package.query.get(package_id)
        package.status = new_status
        db.session.commit()

        # Return a success response
        return jsonify({'message': f'Package with ID {package_id} updated successfully', 'status': new_status}), 200
    else:
        return jsonify({'error': 'Unauthorized access'}), 401

@admin_bp.route('/admin/pickup/delete/<int:id>', methods=['POST'])
@login_required
def delete_pickup_location(id):
    if current_user.is_authenticated and current_user.admin:
        # Get the pickup location by id
        pickup_location = PickupLocation.query.get_or_404(id)

        try:
            # Delete the pickup location
            db.session.delete(pickup_location)
            db.session.commit()
            
            flash('Address deleted successfully!', 'success')
            return redirect("/admin/pickup")
        except Exception as e:
            flash('Failed to delete the address!', 'error')
            return redirect("/admin/pickup")
    else:
        redirect("/login")
    
@admin_bp.route('/admin/package/delete/<id>', methods=['POST'])
@login_required
def delete_packages(id):

    # Get the pickup location by id
    pickup_location = Package.query.get(id)

    try:
        # Delete the pickup location
        db.session.delete(pickup_location)
        db.session.commit()
        flash('Package deleted successfully!', 'success')
        return redirect("/packages")
    except Exception as e:
        flash('Failed to delete the Package!', 'error')
        return redirect("/packages")

@admin_bp.route('/admin/pickup', methods=['GET', 'POST'])
@login_required
def pickup():
    if current_user.is_authenticated and current_user.admin:
        if request.method == 'POST':
            # Retrieve form data
     
            address = request.form.get('pickupAddress')
            city = request.form.get('pickupCity')
            postcode = request.form.get('pickupPostcode')
            timeslots = request.form.get('pickupTimeSlots')
            timeslots =timeslots.split(",")

            timeslots_dict ={}

            for slot in timeslots:
                timeslots_dict[slot]=True

            # Create a new PickupLocation object
            new_pickup_location = PickupLocation(
                address=address,
                city=city,
                postcode=postcode,
                timeslots=str(timeslots_dict)
            )

            # Add the new_pickup_location to the database session
            db.session.add(new_pickup_location)

            # Commit the changes to the database
            db.session.commit()
            flash('Address created successfully!', 'success')
            # Redirect to a success page or route
            return redirect("/admin/pickup")  # Redirect to the pickup page or another suitable route after adding the location
        pickups = PickupLocation.query.all()

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


        # Render the pickup.html template for GET requests
        return render_template('admin/pickup.html', pickups=pickups,filtered_pickup=filtered_pickup)
    else:
        return redirect("/login")
    
    
@admin_bp.route('/admin/support')
@login_required
def support():
    if current_user.is_authenticated and current_user.admin:
        # Query all support tickets
        tickets = SupportTicket.query.all()

        # Pass the tickets to the template
        return render_template('admin/support.html', tickets=tickets)
    else:
        return redirect("/login")  # Assuming your login route is named 'auth.login'
    

@admin_bp.route('/admin/assigned/<id>', methods=['POST'])
@login_required
def assign(id):
    if current_user.is_authenticated and current_user.admin:
        # Get the SupportTicket object by its ID
        feedback = SupportTicket.query.filter_by(ticketid=id).first()

        # Update the status of the feedback to "Assigned"
        feedback.status = "Assigned"
        
        # Commit the changes to the database
        db.session.commit()
        flash('Assigned successful!', 'success')
        # Redirect to a success page or route
        return redirect("/admin/support")  # Change 'admin.pickup' to the appropriate route

    else:
        return redirect("/login")  # Assuming your login route is named 'auth.login'