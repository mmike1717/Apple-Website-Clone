from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField
from wtforms.validators import DataRequired, Email, ValidationError


class ProfileForm(FlaskForm):
    image = StringField('image')
    address = StringField('address')
    apt = StringField('apt')
    zip_code = IntegerField('zip_code')
    city = StringField('city')
    state = StringField('state')
    country = StringField('country')
    user_id = IntegerField('user_id')
