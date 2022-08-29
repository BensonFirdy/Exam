from flask_app import app
from flask import render_template, request, redirect, session, flash

from flask_app.models.user import User

from flask_app.models.band import Band

@app.route("/band/new")
def new_band():
    if 'user_id' not in session:
        flash("Please login or register before proceeding!")
        return redirect("/")
    return render_template("new.html")

@app.route("/band/create", methods=["POST"])
def create_band():
    #1 validate form info
    if not Band.validate_band(request.form):
        return redirect("/band/new")

    #2 collect query data
    query_data = {
        "name" : request.form["name"],
        "genre" : request.form["genre"],
        "home_city" : request.form["home_city"],
        "user_id" : session["user_id"]
    }

    #3 query using data(INSERT)
    Band.create_band(query_data)

    #4 redirect elsewhere
    return redirect("/dashboard")




@app.route("/band/edit/<int:band_id>")
def edit_band(band_id):
    if 'user_id' not in session:
        flash("Please login or register before proceeding!")
        return redirect("/")

        #1-gather query data
    query_data = {
        "band_id" : band_id
    }

        #2-query with data
    band = Band.get_one_band(query_data)

    return render_template("edit_band.html", one_band = band)

@app.route("/band/update/<int:band_id>", methods=["POST"])
def update_band(band_id):

    #1-validate information
    if not Band.validate_band(request.form):
        return redirect(f"/band/edit/{band_id}")

    #2-gather query data
    query_data = {
        "name" : request.form["name"],
        "genre" : request.form["genre"],
        "home_city" : request.form["home_city"],
        "band_id" : band_id
    }

    #3-query with data
    Band.update_band(query_data)

    #4-redirect elsewhere
    return redirect("/dashboard")

@app.route("/band/delete/<int:band_id>")
def delete_band(band_id):
    query_data = {
        "band_id" : band_id
    }
    Band.delete_band(query_data)
    return redirect("/dashboard")