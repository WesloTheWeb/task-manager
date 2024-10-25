from flask import Flask, jsonify

app = Flask(__name__)

# In-memory task storage
tasks = []

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

if __name__ == '__main__':
    app.run(debug=True)
