import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, CreatePost , Loader, FormField } from './components';



function App(){ 

    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const handleSubmit = async () => {
        const response = await fetch('http://127.0.0.1:5000/generate_text', {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': 'http://192.168.1.107:3000',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText })
      });
      if (!response.ok) {
          throw new Error("hey somethings is wrong");
        }
      
        const data = await response.json();
        console.log(data);
        setOutputText(data);
     }       
    return(
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
       
      </Link>  
      <Loader/>
  
    <div className="App">
      <header className="App-header">
      
      <h1 className="text-3xl font-bold underline">
         Hello world!
    </h1>
      </header>
      <main>
        <div>
            <label htmlFor="input-text">Input Text:</label>
              <textarea
                id="input-text"
                name="input-text"
                rows={5}
                cols={50}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
        </div>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        <div>                 
           {outputText}        
        </div>
      </main>
    </div>
        <FormField/>
      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);
}
export default App;