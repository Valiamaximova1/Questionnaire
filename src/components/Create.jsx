// import ReactDOM from 'react-dom/client';
import React from 'react';
import { useState } from 'react';
import "./Create.css";


function Create() {
    const [text, setText] = useState([]);
    const [str, setStr] = useState([]); 

    let random = 0;

      function randomNumberInRange(min, max) {
        random = Math.floor(Math.random() * (max - min + 1)) + min
        return random;
      }
      function randomTextInRange() {
        var result           = '';
        var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
        
        for ( var i = 0; i < 6; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 6)) ;
       }
       return result
      }

      const handleClick = () => { 
        setText(randomNumberInRange(100000, 999999));
        setStr(randomTextInRange())
        
      };

 
    const handleSubmit=()=> { 
        const postURL = "http://localhost:4000/api/staff/" 
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                            {
                              questionnaire_id: text,
                              string: str
                            }

                          )
        })
    }
     


    
      function submitForm(str){
        if(str.length=6){
          document.forms["myform"].submit();
        }
        console.log("nz");
     }
   
    return (
      <div>
         <h1>Create notes</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         
         
          <form onClick={handleClick} onSubmit={handleSubmit}  >
        <label>
            {/* <input  name="questionnaire_id"  autoComplete="off"  placeholder="Note title"></input> */}
            {/* <textarea onChange={(e) => setContent(e.target.value)} name="content" rows="4" cols="50" value={content} autoComplete="off"  placeholder="Note content"></textarea> */}
        </label><input value='Create questionnaire'   type="submit" />
        
      </form>


      </div>
    )
  }

  export default Create;
