from flask import Flask, jsonify, request
import openai
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# Define API endpoint for generating text
@app.route('/generate_text', methods=['POST'])
def generate_text():    
    # Retrieve request data from the frontend
    request_data = request.json
    # Retrieve input text from request data
    input_text = request_data['text']   
    #openai.api_key_path = ".env" 
    print(request_data["text"])
    # Generate text with OpenAI GPT-3.5 Turbo
    # Set up OpenAI API credentials
    #openai.api_key = os.environ.get("OPENAI_API_KEY")
    openai.api_key = "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"
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo", 
    messages = [{"role": "system", "content" : "You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible.\nKnowledge cutoff: 2021-09-01\nCurrent date: 2023-03-23"},
        {"role": "user", "content" : "How are you?"},
        {"role": "assistant", "content" : "I am doing well"},
        {"role": "user", "content" : "What is the impact you want to have on the planet?"},
        {"role": "user", "content" : input_text}]
        )
    #print(completion)
    print(completion.choices[0].message['content'])
    # Return generated text to the frontend
    response_data = completion.choices[0].message['content']

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)