from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app
from flask import flash
from flask_app.models import user


class Car:
    db = "cars_schema"
    def __init__(self, data):
        self.id = data["id"]
        self.color = data["color"]
        self.num_of_seats = data["num_of_seats"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.user_id = data["user_id"]

        self.driver = {};

    @staticmethod
    def validate_car(form_data):
        is_valid = True
        if len(form_data["color"]) < 3 or len(form_data["color"]) > 25:
            flash("Color must be between 3 and 25 characters!")
            is_valid = False
        
        if form_data["num_of_seats"] == "":
            flash("Please enter number of seats!")
            is_valid = False
        elif int(form_data["num_of_seats"]) > 15:
            flash("Number of seats cannot exceed 15!")
            is_valid = False


        return is_valid

    @classmethod
    def create_car(cls,data):
        query = "INSERT INTO cars (color, num_of_seats, user_id, created_at) VALUES (%(color)s, %(num_of_seats)s, %(user_id)s, NOW());"
        results = connectToMySQL(cls.db).query_db(query, data)
        return results

    @classmethod
    def get_all_cars(cls):
        query = "SELECT * FROM cars LEFT JOIN users ON cars.user_id = users.id;"
        results = connectToMySQL(cls.db).query_db(query)
        
        all_cars_with_drivers = []
        for row in results:
            car = cls(row)
            user_data = {
                "id" : row["users.id"],
                "first_name" : row["first_name"],
                "last_name" : row["last_name"],
                "email" : row["email"],
                "password" : row["password"],
                "created_at" : row["users.created_at"],
                "updated_at" : row["users.updated_at"]
            }
            car.driver = user.User(user_data)
            all_cars_with_drivers.append(car)
        
        return all_cars_with_drivers

    @classmethod
    def get_one_car(cls,data):
        query = "SELECT * FROM cars LEFT JOIN users ON cars.user_id = users.id WHERE cars.id = %(car_id)s;"
        results = connectToMySQL(cls.db).query_db(query,data)

        car = cls(results[0])

        user_data = {
            "id" : results[0]["users.id"],
            "first_name" : results[0]["first_name"],
            "last_name" : results[0]["last_name"],
            "email" : results[0]["email"],
            "password" : results[0]["password"],
            "created_at" : results[0]["users.created_at"],
            "updated_at" : results[0]["users.updated_at"]
        }

        car.driver = user.User(user_data)
        return car

    @classmethod
    def update_car(cls, data):
        query = "UPDATE cars SET color = %(color)s, num_of_seats = %(num_of_seats)s, updated_at = NOW() WHERE id = %(car_id)s;"
        connectToMySQL(cls.db).query_db(query,data)
        return

    @classmethod
    def delete_car(cls,data):
        query = "DELETE FROM cars WHERE id = %(car_id)s;"
        connectToMySQL(cls.db).query_db(query,data)
        return