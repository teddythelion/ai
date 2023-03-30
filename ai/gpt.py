import os
import openai
openai.api_key = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
completion = openai.ChatCompletion.create(
  model="gpt-3.5-turbo", 
  messages = [{"role": "system", "content" : "You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible.\nKnowledge cutoff: 2021-09-01\nCurrent date: 2023-03-23"},
{"role": "user", "content" : "How are you?"},
{"role": "assistant", "content" : "I am doing well"},
{"role": "user", "content" : "What is the impact you want to have on the planet?"}]
)
#print(completion)
print(completion)