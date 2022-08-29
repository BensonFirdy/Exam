from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app
from flask import flash
from flask_app.models import user


class Band:
    db = "myband_schema"
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.genre = data["genre"]
        self.home_city = data["home_city"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.user_id = data["user_id"]

        self.users = {};

    @staticmethod
    def validate_band(form_data):
        is_valid = True
        if len(form_data["name"]) < 1:
            flash("Band name must be present!")
            is_valid = False
        elif len(form_data["name"]) < 2:
            flash("Band name must be at least 2 characters long!")
            is_valid = False
        
        if len(form_data["genre"]) < 1:
            flash("Music Genre must be present!")
            is_valid = False
        elif len(form_data["genre"]) < 2:
            flash("Music Genre must be at least 2 characters long!")
            is_valid = False
        
        if len(form_data["home_city"]) < 1:
            flash("Home City must be present!")
            is_valid = False
        


        return is_valid

    @classmethod
    def create_band(cls,data):
        query = "INSERT INTO bands (name, genre, home_city, user_id, created_at) VALUES (%(name)s, %(genre)s, %(home_city)s, %(user_id)s, NOW());"
        results = connectToMySQL(cls.db).query_db(query, data)
        return results

    @classmethod
    def get_all_band(cls):
        query = "SELECT * FROM bands LEFT JOIN users ON bands.user_id = users.id;"
        results = connectToMySQL(cls.db).query_db(query)
        
        all_band_with_users = []
        for row in results:
            band = cls(row)
            user_data = {
                "id" : row["users.id"],
                "first_name" : row["first_name"],
                "last_name" : row["last_name"],
                "email" : row["email"],
                "password" : row["password"],
                "created_at" : row["users.created_at"],
                "updated_at" : row["users.updated_at"]
            }
            band.user = user.User(user_data)
            all_band_with_users.append(band)
        
        return all_band_with_users

    @classmethod
    def get_one_band(cls,data):
        query = "SELECT * FROM bands LEFT JOIN users ON bands.user_id = users.id WHERE bands.id = %(band_id)s;"
        results = connectToMySQL(cls.db).query_db(query,data)

        band = cls(results[0])

        user_data = {
            "id" : results[0]["users.id"],
            "first_name" : results[0]["first_name"],
            "last_name" : results[0]["last_name"],
            "email" : results[0]["email"],
            "password" : results[0]["password"],
            "created_at" : results[0]["users.created_at"],
            "updated_at" : results[0]["users.updated_at"]
        }

        band.user = user.User(user_data)
        return band

    @classmethod
    def update_band(cls, data):
        query = "UPDATE bands SET name = %(name)s, genre = %(genre)s, home_city = %(home_city)s, updated_at = NOW() WHERE id = %(band_id)s;"
        connectToMySQL(cls.db).query_db(query,data)
        return

    @classmethod
    def delete_band(cls,data):
        query = "DELETE FROM bands WHERE id = %(band_id)s;"
        connectToMySQL(cls.db).query_db(query,data)
        return