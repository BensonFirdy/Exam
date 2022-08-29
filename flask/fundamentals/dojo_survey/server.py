from flask import Flask, render_template, session, request, redirect

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/result", methods=['POST'])
def submitSurvey():
    print(request.form)
    print("Name", request.form["name"])
    print("Dojo Location", request.form["dojo_location"])
    print("Favorite Language", request.form["favorite_language"])
    print("Comment", request.form["comment"])
    return render_template("result.html")


if __name__=="__main__":
    app.run(debug=True)