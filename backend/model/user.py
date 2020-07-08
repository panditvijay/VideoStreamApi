from app import db
from app import ma


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    password = db.Column(db.String(100))

    def __init__(self,first_name, last_name, email, password):
        self.first_name=first_name
        self.last_name=last_name
        self.email=email
        self.password=password



class UserSchema(ma.Schema):
  class Meta:
    fields = ('id', 'first_name', 'last_name', 'email', 'password')