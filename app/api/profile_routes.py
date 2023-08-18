
from flask import Blueprint, jsonify, session,request
from flask_login import login_required,current_user
from app.models import Profile, User
from app.models import db
from app.forms.profile_form import ProfileForm
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker



profile_routes = Blueprint('profiles', __name__)

db_url = "sqlite:///dev.db"
engine = create_engine(db_url)
SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()


@profile_routes.route('/new', methods=['POST'])
@login_required
def create_Profile():
    form = ProfileForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print(form.data,'===========')
    if form.validate_on_submit():
        profile_info = Profile(
            address = form.data['address'],
            apt = form.data['apt'],
            zip_code = form.data['zip_code'],
            city = form.data['city'],
            state = form.data['state'],
            country = form.data['country']
        )
        # print('backend-----------',channel)
        db.session.add(profile_info)
        db.session.commit()
        # print(product.to_dict())
        return profile_info.to_dict()



@profile_routes.route('/edit/<int:user_id>', methods=['GET','POST','PUT'])
@login_required
def edit_profile(user_id):
    form = ProfileForm()
    user = User.query.get(user_id)
    form['csrf_token'].data = request.cookies['csrf_token']
    user.profile_info.address = form.data['address']
    user.profile_info.apt = form.data['apt']
    user.profile_info.zip_code = form.data['zip_code']
    user.profile_info.city = form.data['city']
    user.profile_info.state= form.data['state']
    user.profile_info.country = form.data['country']
    db.session.commit()
    return user.profile.to_dict()
