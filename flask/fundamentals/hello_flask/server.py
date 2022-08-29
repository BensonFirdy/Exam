from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response



# @app.route("/hello")
# def hello():
#     return "Well, Hi!"


@app.route("/goodbye")
def goodbye():
    return "Cya later!!!"

@app.route("/hello/<name>")
def hello(name):
    print(name)
    return f"Hello,  {name}"

@app.route("/math/<int:num>")
def do_math(num):
    newArr = []
    for i in range(0, num+1, 1):
        newArr.append(i)
    return f"{newArr}"


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

