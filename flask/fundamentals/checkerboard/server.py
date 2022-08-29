from flask import Flask, render_template
app= Flask(__name__)

print(__name__)

@app.route('/')
def index():
    return render_template("other.html", num = 8, num1 = 8)

# @app.route('/<int:num>')
# def other(num):
#     return render_template("other.html", num = num)

@app.route('/<int:num>/<int:num1>')
def other(num, num1):
    return render_template("other.html",num = num, num1 = num1)






if __name__=="__main__":
    app.run(debug=True)