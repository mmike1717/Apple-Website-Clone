
from flask import Blueprint, jsonify, session,request
from flask_login import login_required,current_user
from app.models import Product, InStoreItem
from app.models import db
from app.forms.product_form import ProductForm
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker



product_routes = Blueprint('products', __name__)

db_url = "sqlite:///dev.db"
engine = create_engine(db_url)
SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()


@product_routes.route('/new', methods=['POST'])
@login_required
def create_Channel():
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print(form.data,'===========')
    if form.validate_on_submit():
        product = Product(
            name = form.data['name'],
            price = form.data['price'],
            color = form.data['color'],
            storage = form.data['storage'],
            model = form.data['model'],
            category_id = form.data['category_id'],
        )
        # print('backend-----------',channel)
        db.session.add(product)
        db.session.commit()
        # print(product.to_dict())
        return product.to_dict()



@product_routes.route('/item/<int:itemid>')
def get_item(itemid):
    item = InStoreItem.query.get(itemid)
    return item.to_dict()
