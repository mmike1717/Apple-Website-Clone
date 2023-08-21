from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin


class Save(db.Model, UserMixin):
    __tablename__ = 'saves'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)

    user = db.relationship(
            "User",
            back_populates="save_list"
        )

    product = db.relationship(
            "Product",
            # cascade = 'all, delete-orphan',
            back_populates="save_list"
        )


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
        }
