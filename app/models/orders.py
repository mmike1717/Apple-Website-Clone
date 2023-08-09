from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin



class Order(db.Model, UserMixin):
    __tablename__ = 'orders'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String)
    created_at = db.Column(db.Date)
    quantity = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)



    user = db.relationship(
            "User",
            back_populates="orders"
        )

    product = db.relationship(
            "Product",
            back_populates="order"
        )



    def to_dict(self):
        return {
            'id': self.id,
            'status': self.status,
            'created_at': self.created_at,
            'quantity': self.quantity,
            'user_id': self.user_id,
            'product_id': self.product_id
        }
