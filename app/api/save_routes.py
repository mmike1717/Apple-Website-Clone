from flask import Blueprint, jsonify, session,request
from flask_login import login_required,current_user
from app.models import Save
from app.models import db
from app.forms.save_form import SaveForm
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import datetime



save_routes = Blueprint('saves', __name__)

db_url = "sqlite:///dev.db"
engine = create_engine(db_url)
SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()


@save_routes.route('/get_saved/<int:userid>')
def get_saved_list(userid):
    saved_list = Save.query.filter(userid == Save.user_id)
    return [each.to_dict() for each in saved_list]



@save_routes.route('/save_item/<int:productid>/<int:userid>', methods=['POST'])
@login_required
def create_save_list(productid, userid):
    form = SaveForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        saved = Save(
            user_id = userid,
            product_id = productid
        )
        db.session.add(saved)
        db.session.commit()
        # print(order.to_dict())
        return saved.to_dict()



@save_routes.route('/delete/<int:saved_id>', methods=['GET','POST','DELETE'])
@login_required
def delete_saved(saved_id):
    saved_item_delete = Save.query.get(saved_id)
    db.session.delete(saved_item_delete)
    db.session.delete(saved_item_delete.product)
    db.session.commit()
    return {'message':'deleted'}




# this function removes the item from saved list but doesnt delete product just moves it
@save_routes.route('/remove_from_saved/<int:saved_id>', methods=['GET','POST','DELETE'])
@login_required
def removed_item_from_saved(saved_id):
    remove_saved_item = Save.query.get(saved_id)
    db.session.delete(remove_saved_item)
    # db.session.delete(saved_item_delete.product)
    db.session.commit()
    return {'message':'removed item from saved'}
