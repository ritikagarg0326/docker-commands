from flask import Flask, send_file

app = Flask(__name__)

@app.route('/')
def home():
    return send_file('index.html')  # since index.html is in the same folder

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9090)
