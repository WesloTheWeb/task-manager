from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# In-memory task storage with some test data
tasks = [
    {"id": 1, "title": "Test Task 1", "completed": False},
    {"id": 2, "title": "Test Task 2", "completed": True}
]

# Root route for testing
@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Server is running! Try /tasks to see all tasks"})

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

if __name__ == '__main__':
    app.run(debug=True, port=5000)