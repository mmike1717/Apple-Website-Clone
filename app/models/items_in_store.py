from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin


class InStoreItem(db.Model, UserMixin):
    __tablename__ = 'in_store_items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    price = db.Column(db.Numeric(precision=6, scale=2), nullable=False)
    model = db.Column(db.String, nullable=False)
    image = db.Column(db.String)
    category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('categories.id')), nullable=False)



    review = db.relationship(
            "Review",
            back_populates="store_item"
        )

    category =  db.relationship(
            "Category",
            back_populates="store_item"
        )



    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'model': self.model,
            'image': self.image
        }
