# ml_server.py
from flask import Flask, request, jsonify
import numpy as np

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    input_data = data.get('input')
    # Process input_data with your ML model here
    # For demonstration, let's pretend we're returning a prediction.
    prediction = {"result": f"Predicted value for {input_data}"}
    return jsonify(prediction)

if __name__ == '__main__':
    app.run(port=5001)
