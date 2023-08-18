from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField
from wtforms.validators import DataRequired, Email, ValidationError


class ProfileForm(FlaskForm):
    address = StringField('address', validators=[DataRequired()]),
    apt = StringField('apt'),
    zip_code = IntegerField('zip_code', validators=[DataRequired()]),
    city = StringField('city', validators=[DataRequired()]),
    state = StringField('state', validators=[DataRequired()]),
    country = StringField('country', validators=[DataRequired()])
