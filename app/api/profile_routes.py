
from flask import Blueprint, jsonify, session,request
from flask_login import login_required,current_user
from app.models import User, Profile
from app.models import db
from app.forms.profile_form import ProfileForm
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker



profile_routes = Blueprint('profiles', __name__)

db_url = "sqlite:///dev.db"
engine = create_engine(db_url)
SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()


@profile_routes.route('/get_profile/<int:user_id>')
@login_required
def get_single_profile(user_id):

    if user_id:
        profile = Profile.query.filter(user_id == Profile.user_id)
        for each in profile:
            return each.to_dict()

    return {'error': 'no profile'}




@profile_routes.route('/new', methods=['POST'])
@login_required
def create_Profile():
    form = ProfileForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print(form.data,'===========')
    if form.validate_on_submit():
        print(form.data, '===========')
        profile_info = Profile(
            image = form.data['image'],
            address = form.data['address'],
            apt = form.data['apt'],
            zip_code = form.data['zip_code'],
            city = form.data['city'],
            state = form.data['state'],
            country = form.data['country'],
            user_id = form.data['user_id']
        )
        # print('backend-----------',channel)
        db.session.add(profile_info)
        db.session.commit()
        # print(profile_info.to_dict(), '-----------')
        return profile_info.to_dict()



@profile_routes.route('/edit/<int:user_id>', methods=['GET','POST','PUT'])
@login_required
def edit_profile(user_id):
    form = ProfileForm()
    profile = Profile.query.get(user_id)
    form['csrf_token'].data = request.cookies['csrf_token']
    print(profile, '-----------------')
    profile.address = form.data['address']
    profile.apt = form.data['apt']
    profile.zip_code = form.data['zip_code']
    profile.city = form.data['city']
    profile.state= form.data['state']
    profile.country = form.data['country']
    db.session.commit()
    return profile.to_dict()
    # for each in user.profile_info:
    #     print(each.to_dict(), '==================')
    #     return each.to_dict()
