from flask import Flask, jsonify, request
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow 
from flask_cors import CORS
from flask_jwt_extended import JWTManager


import os

app = Flask(__name__)

app.config.from_envvar('ENV_FILE_LOCATION')


CORS(app)
jwt = JWTManager(app)

basedir = os.path.abspath(os.path.dirname(__file__))
# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Init db
db = SQLAlchemy(app)
# Init ma
ma = Marshmallow(app)



api = Api(app)

#add routes

from resources.videoinfo import VideosinfoApi,VideoinfoApi
from resources.user import SigninApi, SignupApi

api.add_resource(VideosinfoApi, '/stream_api/v1/stream')
api.add_resource(VideoinfoApi, '/stream_api/v1/stream/<id>')
api.add_resource(SigninApi,'/signin_api/v1/signin')
api.add_resource(SignupApi,'/signup_api/v1/signup')