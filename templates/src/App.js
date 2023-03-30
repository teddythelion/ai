import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const responsModals = async () => {
    let responseModal;
    responseModal = document.getElementById('response');
    responseModal.show();
  }
  const handleClear = async () => {
    document.querySelector(".clearField1").value = " ";  
    document.querySelector(".clearField2").value = " ";
    document.querySelector(".clearField3").value = " ";
    document.querySelector(".clearField4").value = " ";  
  }
  
const clearModal = async () => {
  const clearModals = document.querySelector(".modal-body");
  clearModals.innerHTML = ' ';
}
  const handleSubmit = async (event) => {
    event.preventDefault()
    alert("in handle");

     // Grab the values from the input fields
     let broadSubject = document.getElementById('broadSubject').value;
     let specific = document.getElementById('specific').value;
     let diff = document.getElementById('diff').value;
     broadSubject = broadSubject.toString();
     specific  = specific.toString();
     diff = diff.toString();
     // Create an object with the input field values
     const inputFields = {
       broadSubject: broadSubject,
       specific : specific ,
       inputText : inputText,
       diff: diff
     }    
     console.log(inputFields);
    // Create an object with the input field values and the textarea value
   const dataToSend = {     
      text: inputFields
    }
       
     const dataSent =  JSON.stringify(dataToSend["text"]).toString();
     console.log(dataSent);

    const response = await fetch('http://127.0.0.1:5000/generate_text', {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin':'*'       
      },
      body: JSON.stringify({ text: dataToSend['text'] })
    });
    
    const data = await response.json();
    
    setOutputText(data);

    responsModals();
  }
  return (
    <div className="App">
      <header className="App-header">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h5 className="text-white h4">Collapsed content</h5>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </header>
      <main>      
          <div className="row">
            <div className="col-sm-3" style={{marginTop: '6%', marginLeft: '6%' , marginRight: '2%' , marginBottom: '2%'}}>
              <div className="card">
              <img src="books.png" className="card-img-top" alt="Science"/>  
                <div className="card-body">
                  <h5 className="card-title">Enter the General Subject</h5>
                  <p className="card-text">The Field below is for context. It should be the broad title subject like Math, Science, English, History, Psychology.</p>
                  <button className="btn btn-primary">Examples</button>
                </div>
              </div>
            </div>
            <div className="col-sm-3" style={{marginTop: '6%', marginLeft: '2%' , marginRight: '2%' , marginBottom: '2%'}}>
              <div className="card">
              <img src="tree.png" className="card-img-top" alt="Science"/>
                <div className="card-body">
                <h5 className="card-title">More Specific</h5>
                <p className="card-text"> This field is for more specificity, sub category of the main subject; although, No field is required accept the largest one.</p>
                <button className="btn btn-primary">Examples</button>
                </div>
              </div>
            </div>
            <div className="col-sm-3" style={{marginTop: '6%', marginLeft: '2%' , marginRight: '2%' , marginBottom: '2%'}}>
              <div className="card">
              <img src="book.jpg" className="card-img-top" alt="math" />                
                <div className="card-body">
                <h5 className="card-title">Grade Level</h5>
                <p className="card-text"> This field is Grade Level. Type Elementary, junior, high, college, or researcher. Other options are in the field itself.</p>
                <button className="btn btn-primary">Example</button>
                </div>
              </div>
            </div>
          </div>
          
      <form className="row gx-3 gy-2 align-items-center" style={{marginTop: '10px', marginLeft: '65px' , marginRight: '65px' , marginBottom: '65px'}} >
            <div className="col-sm-4">
                <label className="visually-hidden" htmlFor="specificSizeInputName">Name</label>
                <input type="text" style={{height: '60px'}} className="form-control clearField1" id="broadSubject" placeholder= " Math, Science, History, English, Political Science..."/>
            </div>
                    <div className="col-sm-4">
                        <label className="visually-hidden" htmlFor="specific">Username</label>
                        <div className="input-group">                        
                        <input type="text" style={{height: '60px'}} className="form-control clearField2" id="specific" placeholder="Subcategory ie. Algebra, American History"/>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <label className="visually-hidden" htmlFor="specificSizeSelect">Preference</label>
                        <input type="text" style={{height: '60px'}} className="form-control clearField3" id="diff" placeholder="Elem, jr, Hi, Col, res; Abreviations work"/>
                    </div>
                    <textarea
                      id="input-text"
                      className = "form-control clearField4"
                      name="input-text"
                      rows={5}
                      style={{marginTop: '33px'}}
                      cols={50}
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                    />
            
       </form>
            <div className="col-auto" style={{marginLeft: '10%', marginTop: '0px'}}>
                <button onClick={handleSubmit} className="btn btn-primary" data-bs-toggle="modal" href="#response">Submit</button>
                <button onClick={handleClear} className="btn btn-primary" style={{marginLeft: '10%'}} >Clear Fields</button>
            </div>
                           
                
             
            
    <div>
    
<div className=" modal fade" name = "fade" id="response" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="responses">Answers and Understanding</h5>
        <button onClick={clearModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div id = "clearModal" className="modal-body">
      {outputText} 
      </div>
      <div className="modal-footer">
        <button onClick={clearModal}  className="btn btn-primary" data-bs-target="#response" data-bs-toggle="modal" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>      
    </div>  
</main>
    </div>
  );
}

export default App;