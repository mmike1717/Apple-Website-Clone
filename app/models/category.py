from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin


class Category(db.Model, UserMixin):
    __tablename__ = 'categories'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String, nullable=False)


    store_item = db.relationship(
            "InStoreItem",
            back_populates="category"
        )


    def to_dict(self):
        return {
            'id': self.id,
            'category_name': self.category_name,
            'items_in_cat': [each.to_dict() for each in self.store_item]
        }
