from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin


class Review(db.Model, UserMixin):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String, nullable=False)
    rating = db.Column(db.Numeric(precision=3, scale=2), nullable=False)
    created_at = db.Column(db.Date, nullable=False)
    # product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    store_item_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('in_store_items.id')), nullable=False)


    store_item = db.relationship(
            "InStoreItem",
            back_populates="review"
        )


    # product = db.relationship(
    #         "Product",
    #         back_populates="review"
    #     )


    user = db.relationship(
            "User",
            back_populates="reviews"
        )


    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'rating': self.rating,
            'created_at': self.created_at,
            # 'product_id': self.product_id,
            'user_id': self.user_id,
            'store_item_id': self.store_item_id,
            'user_info': self.user.to_dict()
        }
