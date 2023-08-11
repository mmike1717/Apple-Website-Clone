from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField, DateField
from wtforms.validators import DataRequired, Email, ValidationError



class ReviewForm(FlaskForm):
    content = StringField('content')
    rating=DecimalField('rating')
    created_at=DateField('created_at')
    store_item_id=IntegerField('store_item_id')
    user_id=IntegerField('user_id')
