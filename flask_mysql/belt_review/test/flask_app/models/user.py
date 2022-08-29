from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app
from flask import flash

from flask_app.models import band


import re	
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

class User:
    db = "myband_schema"
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.password = data["password"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

        self.band = []


    @staticmethod
    def validate_register(form_data):
        is_valid = True
        if len(form_data["first_name"]) < 1:
            flash("First name must be present!")
            is_valid = False
        elif len(form_data["first_name"]) < 2:
            flash("First name must be at least 2 characters long!")
            is_valid = False
        if len(form_data["last_name"]) < 1:
            flash("Last name must be present!")
            is_valid = False
        elif len(form_data["last_name"]) < 2:
            flash("Last name must be at least 2 characters long!")
            is_valid = False
        if len(form_data["email"]) < 1:
            flash("Email must be present!")
            is_valid = False
        elif not EMAIL_REGEX.match(form_data["email"]):
            flash("Please enter a valid email!")
            is_valid = False
        if len(form_data["password"]) < 8:
            flash("Password must be at least 8 characters long!")
            is_valid = False
        if form_data["password"] != form_data["conf_pass"]:
            flash("Password and Confirmation Password must match!")
            is_valid = False
        return is_valid

    @staticmethod
    def validate_login(form_data):
        is_valid = True
        user_in_db = User.get_by_email(form_data)
        if not user_in_db:
            flash("Invalid Email/Password")
            is_valid = False
        elif not bcrypt.check_password_hash(user_in_db.password, form_data['password']):
            flash("Invalid Email/Password")
            is_valid = False
        return is_valid

    @classmethod
    def register_user(cls, data):
        query = "Insert INTO users (first_name, last_name, email, password, created_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, Now());"
        results = connectToMySQL(cls.db).query_db(query,data)
        return results
    
    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(cls.db).query_db(query,data)
        if len(results) < 1:
            return False
        return cls(results[0])

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(user_id)s;"
        results = connectToMySQL(cls.db).query_db(query,data)
        if len(results) < 1:
            return False
        return cls(results[0])

    @classmethod
    def get_user(cls,data):
        query = "SELECT * FROM users LEFT JOIN bands ON user_id = users.id WHERE users.id = %(user_id)s;"
        results = connectToMySQL(cls.db).query_db(query,data)

        user = cls(results[0])

        for row in results:
            
            band_data = {
                "id" : row["bands.id"],
                "name" : row["name"],
                "genre" : row["genre"],
                "email" : row["email"],
                "home_city" : row["home_city"],
                "created_at" : row["bands.created_at"],
                "updated_at" : row["bands.updated_at"]
                
            }

            user.band.append(band.Band(band_data))
        return user