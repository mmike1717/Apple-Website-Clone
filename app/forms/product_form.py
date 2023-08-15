from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField
from wtforms.validators import DataRequired, Email, ValidationError



class ProductForm(FlaskForm):
    name = StringField('name')
    price=DecimalField('price')
    color=StringField('color')
    storage=IntegerField('storage')
    model=StringField('model')
    image=StringField('image')
