from flask import Blueprint, jsonify, session,request
from flask_login import login_required,current_user
from app.models import Product, InStoreItem, Order
from app.models import db
from app.forms.order_form import OrderForm
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import datetime



order_routes = Blueprint('orders', __name__)

db_url = "sqlite:///dev.db"
engine = create_engine(db_url)
SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()


@order_routes.route('/add_order/<int:productid>/<int:userid>', methods=['POST'])
@login_required
def create_Channel(productid, userid):
    form = OrderForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        order = Order(
            status = form.data['status'],
            created_at = datetime.utcnow(),
            quantity = form.data['quantity'],
            user_id = userid,
            product_id = productid
        )
        db.session.add(order)
        db.session.commit()
        # print(order.to_dict())
        return order.to_dict()



@order_routes.route('/in_cart/<int:userid>')
def get_orders(userid):
    orders = Order.query.filter(userid == Order.user_id)
    return [each.to_dict() for each in orders]



@order_routes.route('/edit/<int:order_id>', methods=['GET','POST','PUT'])
@login_required
def edit_order(order_id):
    form = OrderForm()
    order = Order.query.get(order_id)
    form['csrf_token'].data = request.cookies['csrf_token']
    order.quantity = form.data['quantity']
    db.session.commit()
    return order.to_dict()


@order_routes.route('/delete/<int:order_id>', methods=['GET','POST','DELETE'])
@login_required
def delete_order(order_id):
    order_to_delete = Order.query.get(order_id)
    db.session.delete(order_to_delete)
    db.session.commit()
    return {'message':'deleted'}


@order_routes.route('/delete/cart/<int:user_id>', methods=['GET','POST','DELETE'])
@login_required
def checkout(user_id):
    all_orders = Order.query.filter(user_id == Order.user_id)
    for each in all_orders:
        db.session.delete(each.product)
        db.session.delete(each)
        db.session.commit()
    return {'message':'deleted all cart'}
