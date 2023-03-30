from flask import Flask, jsonify, request
import openai
import os
from flask_cors import CORS
import numpy as np
app = Flask(__name__)
CORS(app)
# Define API endpoint for generating text
@app.route('/generate_text', methods=['POST'])
def generate_text():  

    print(request.json["text"])  
    # Retrieve request data from the frontend
    input_text = request.json["text"]
    # Retrieve input text from request data
    
    
    print(input_text)
    promptPartOne = input_text["broadSubject"]
    promptPartTwo = input_text["specific"]
    promptPartThree = input_text["inputText"]
    promptPartFour = input_text["diff"]
    #openai.api_key_path = ".env" 
    print(promptPartFour)
    # Generate text with OpenAI GPT-3.5 Turbo
    # Set up OpenAI API credentials    
    openai.api_key = "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"
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo", 
    messages = [{"role": "system", "content" : "You are a world renowned College Professor of {promptPartOne}, Answer as concisely and as collegiately as possible.\nKnowledge cutoff: 2021-09-01\nCurrent date: 2023-03-23"},
        {"role": "user", "content" : "Do you know the subject {promptPartTwo} ?"},
        {"role": "assistant", "content" : "Because I need a deep understanding written {promptPartFour} and clearly. "},
        {"role": "user", "content" : "What is the impact you want to have on the planet?"},
        {"role": "user", "content" : promptPartThree}]
        )
    #print(completion)
    print(completion.choices[0].message['content'])
    # Return generated text to the frontend
    response_data = completion.choices[0].message['content']

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)