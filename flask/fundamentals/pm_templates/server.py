from flask import Flask, render_template
app = Flask(__name__)



@app.route('/')
def index():
    return "Hello there!"



@app.route("/template")
def template():
    return render_template('index.html', phrase="hello",times=5)


@app.route("/students")
def display_students():
    student_info= [
        {'name' : 'Michael', 'age' : 35},
        {'name' : 'John', 'age' : 30}
    ]
    return render_template("index.html",
    students = student_info)












if __name__=="__main__":
    app.run(debug=True)