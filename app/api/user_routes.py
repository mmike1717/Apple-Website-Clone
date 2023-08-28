from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, db
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

user_routes = Blueprint('users', __name__)


db_url = "sqlite:///dev.db"
engine = create_engine(db_url)
SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()



@user_routes.route('/delete/<int:id>')
@login_required
def delete_user(id):
    """
    Query for a user by id and deletes user
    """
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return {'message': 'deleted user'}
