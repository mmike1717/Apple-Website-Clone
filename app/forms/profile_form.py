from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField
from wtforms.validators import DataRequired, Email, ValidationError
from flask_wtf.file import FileField, FileAllowed, FileRequired
from ..api.AWS_helper import ALLOWED_EXTENSIONS


class ProfileForm(FlaskForm):
    # image = StringField('image')
    image = FileField('image', validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    address = StringField('address')
    apt = StringField('apt')
    zip_code = IntegerField('zip_code')
    city = StringField('city')
    state = StringField('state')
    country = StringField('country')
    user_id = IntegerField('user_id')
