from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, DateField
from wtforms.validators import DataRequired, Email, ValidationError



class SaveForm(FlaskForm):
    user_id=IntegerField('user_id')
    product_id=IntegerField('product_id')
