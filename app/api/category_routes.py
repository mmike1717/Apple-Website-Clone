from flask import Blueprint, jsonify, session,request
from flask_login import login_required,current_user
from app.models import Category, InStoreItem
from app.models import db
# from app.forms.order_form import OrderForm
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import datetime



category_routes = Blueprint('categories', __name__)

db_url = "sqlite:///dev.db"
engine = create_engine(db_url)
SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()


@category_routes.route('/get_all')
def get_category():
    categories = Category.query.all()
    return [each.to_dict() for each in categories]


@category_routes.route('/store/all_items')
def get_all_in_store_items():
    allItems = InStoreItem.query.all()
    return [each.to_dict() for each in allItems]
