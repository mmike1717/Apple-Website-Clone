from .db import db, environment, SCHEMA, add_prefix_for_prod
from flask_login import UserMixin


class Profile(db.Model, UserMixin):
    __tablename__ = 'profiles'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String, nullable = False)
    apt = db.Column(db.String)
    zip_code = db.Column(db.Integer, nullable=False)
    city = db.Column(db.String, nullable = False)
    state = db.Column(db.String, nullable = False)
    country = db.Column(db.String, nullable = False)

    user = db.relationship(
            "User",
            back_populates="profile_info"
        )


    def to_dict(self):
        return {
            'id': self.id,
            'address': self.address,
            'apt': self.apt,
            'zip_code': self.zip_code,
            'city': self.city,
            'state': self.state,
            'country': self.country
        }
