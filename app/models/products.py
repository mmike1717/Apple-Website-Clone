from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin


class Product(db.Model, UserMixin):
    __tablename__ = 'products'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    price = db.Column(db.Numeric(precision=6, scale=2), nullable=False)
    color = db.Column(db.String, nullable=False)
    storage = db.Column(db.Integer, nullable=False)
    available = db.Column(db.Boolean, nullable=False)
    image = db.Column(db.String)
    category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('categories.id')), nullable=False)


    cat_id = db.relationship(
            "Category",
            back_populates="product"
        )


    review = db.relationship(
            "Review",
            cascade = 'all, delete-orphan',
            back_populates="product"
        )


    order = db.relationship(
        "Order",
        back_populates="product"
    )


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'color': self.color,
            'storage': self.storage,
            'available': self.available,
            'image': self.image,
            'category_id': self.category_id
        }
