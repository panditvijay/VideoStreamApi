from flask import Response, request, jsonify
from flask_restful import Resource
import datetime
from flask_jwt_extended import jwt_required
from flask_jwt_extended import create_access_token,decode_token


from app import db
from app import ma


from model.user import User, UserSchema

# Init schema
user_schema = UserSchema()
#users_schema = UserSchema(many=True)



class SignupApi(Resource):

    def post(self):

        first_name = request.json['first_name']
        last_name = request.json['last_name']
        email = request.json['email']
        password = request.json['password']

        new_user = User(first_name, last_name, email, password)

        db.session.add(new_user)
        db.session.commit()

        return user_schema.jsonify(new_user)


class SigninApi(Resource):

    def post(self):

        email = request.json['email']
        password = request.json['password']

        user = db.session.query(User).filter(User.email==email).all()
        print(user[0].__dict__['email'])
        

        if not user:
            return {'error': 'Invalid email'}, 401
        if user[0].__dict__['password']!=password:
            return {'error': 'Invalid password'}, 401
        

        expires = datetime.timedelta(days=1)
        access_token = create_access_token(identity=str(user[0].__dict__['email']), expires_delta=expires)
        return {'token': access_token,'first_name':user[0].__dict__['first_name']}, 200
        

        
        #return user_schema.jsonify(user)