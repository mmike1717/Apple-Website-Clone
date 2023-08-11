
from flask import Blueprint, jsonify, session,request
from flask_login import login_required,current_user
from app.models import Review
from app.models import db
from app.forms.review_form import ReviewForm
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import datetime



review_routes = Blueprint('reviews', __name__)

db_url = "sqlite:///dev.db"
engine = create_engine(db_url)
SessionFactory = sessionmaker(bind=engine)
session = SessionFactory()


@review_routes.route('/new_review', methods=['POST'])
@login_required
def create_Review():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            content = form.data['content'],
            rating = form.data['rating'],
            created_at = datetime.utcnow(),
            store_item_id = form.data['store_item_id'],
            user_id = form.data['user_id']
        )
        print(review,'here--------------')
    #     # print('backend-----------',review)
        db.session.add(review)
        db.session.commit()
    #     print(product.to_dict())
        return review.to_dict()



@review_routes.route('/get_reviews/<int:itemid>')
def get_review(itemid):
    review = Review.query.filter(Review.store_item_id == itemid)
    return [each.to_dict() for each in review]


@review_routes.route('/edit/<int:review_id>', methods=['GET','POST','PUT'])
@login_required
def edit_order(review_id):
    form = ReviewForm()
    review = Review.query.get(review_id)
    form['csrf_token'].data = request.cookies['csrf_token']
    review.content = form.data['content']
    review.rating = form.data['rating']
    review.created_at = datetime.utcnow()
    db.session.commit()
    return review.to_dict()


@review_routes.route('/delete/<int:review_id>', methods=['GET','POST','DELETE'])
@login_required
def delete_review(review_id):
    review_to_delete = Review.query.get(review_id)
    db.session.delete(review_to_delete)
    db.session.commit()
    return {'message':'deleted'}
