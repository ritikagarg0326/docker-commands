from flask import Flask, render_template

# Create a Flask app object
app = Flask(__name__)

# Define a route (like app.get('/') in Node)
@app.route('/')
def home():
    return render_template('index.html')  # loads index.html from templates/

# Start the server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
