import React, {  useState } from "react";
import "./Notes.css";


function Notes() { 
    const [text, setText] = useState([ ]);

    const fetchData=()=> { 
      const getURL = "http://localhost:4000/api/staff/" 
      fetch(getURL, {
          method: 'GET'
         
      }).then(console.log("yes connect"))
      .then((response) => response.json()) 
      
      .then((text) => setText(text));
    } 
    window.onload = fetchData;
    function refreshPage() {
      window.location.reload(false);
    }
    
    return (
      <main onLoad={refreshPage}>
        
         { text.map((userObj, index) => (
            <li><h4 key={userObj.id}>{userObj.text.questionnaire_id}</h4>  </li>
            ))}
{/* 
        <div>
             <h1>Notes titles</h1>
        <ol>
          { text.length > 0 && text.map((userObj, index) => (
            <li><h4 key={userObj.id}>{userObj.text.questionnaire_id}</h4>  </li>
            ))}
        </ol>
        </div> */}
     
      </main>
    );
  }

export default Notes;