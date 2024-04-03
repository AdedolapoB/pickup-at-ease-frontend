from datetime import date
from flask_login import UserMixin

from core import db 


class User(db.Model, UserMixin):
    __tablename__= "users"

    id = db.Column(db.Integer,primary_key=True)
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(50))
    username = db.Column(db.String(50), unique=True)
    phone = db.Column(db.String(50), unique=False)
    created = db.Column(db.Date, default=date.today())
    admin = db.Column(db.Boolean, default=False)


# Support Ticket Table
class SupportTicket(db.Model):
    __tablename__ = "SupportTickets"

    user_id = db.Column(db.Integer) 
    ticketid = db.Column(db.String(50), primary_key=True)
    name = db.Column(db.String(100))
    email= db.Column(db.String(100))
    phone = db.Column(db.String(100))
    issue_description = db.Column(db.String(255))
    status = db.Column(db.String(50), default="Not Assigned")
    created = db.Column(db.Date, default=date.today())
    assignee = db.Column(db.String(50), default="")

# Package Table
class Package(db.Model):
    __tablename__ = "Packages"
    user_id = db.Column(db.Integer) 
    package_id = db.Column(db.String(50), primary_key=True)
    description = db.Column(db.String(255))
    size = db.Column(db.String(500))
    weight = db.Column(db.String(500))
    slot_id=db.Column(db.Integer) 
    pickuploc = db.Column(db.String(255))
    schedule_time= db.Column(db.String(255))
    status = db.Column(db.String(50), default="Scheduled")  #Scheduled, Delivered, Picked up, Out for Delivery

# Tracking Info Table
class TrackingInfo(db.Model):
    __tablename__ = "TrackingInfo"

    tracking_id = db.Column(db.Integer, primary_key=True)
    package_id = db.Column(db.Integer)
    timestamp = db.Column(db.DateTime)
    status = db.Column(db.String(50))

# Pickup Location Table
class PickupLocation(db.Model):
    __tablename__ = "PickupLocations"

    location_id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(555))
    city = db.Column(db.String(255))
    postcode = db.Column(db.String(555))
    timeslots = db.Column(db.String(555))