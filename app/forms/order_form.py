from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, DateField
from wtforms.validators import DataRequired, Email, ValidationError



class OrderForm(FlaskForm):
    status = StringField('status')
    created_at=DateField('created_at')
    quantity=IntegerField('quantity')
    user_id=IntegerField('user_id')
    product_id=IntegerField('product_id')
