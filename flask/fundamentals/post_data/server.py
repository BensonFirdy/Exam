from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "a;slkdjf"



@app.route("/")
def index():
    if "session_name" in session:
        print(session["session_name"])
    return render_template("index.html")




@app.route("/users", methods=["POST"])
def process_form():

    print(request.form)
    print(request.form["name"])
    print(request.form["email"])
    if request.form["age"] != "":
        int(request.form["age"])

    session["session_name"] = request.form["name"]
    session["session_email"] = request.form["email"]
    session["session_age"] = request.form["age"]

    return redirect("/")















if __name__=="__main__":
    app.run(debug=True)