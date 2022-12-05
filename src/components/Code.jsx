import QRCode from 'qrcode'
import { Button } from '@mui/material'
import React, {  useState } from "react";
import copy from "copy-to-clipboard"; 

function Code() {
  let questID = 1;
  let strLast = "";
  let url = "";
  let qr = "";

  const [text, setText] = useState("");
  const [strr, setStrr] = useState(""); 
  
  const handleSubmitt=()=> { 
    const getURL = "http://localhost:4000/api/staff/" 
    fetch(getURL, {
        method: 'GET'
    }).then((response) => response.json()) 
    .then((text) => setText(text))
    .then((strr) => setStrr(strr));
    console.log(strr);
  } 
  
 
  if(text[text.length-1] !== undefined){
    questID = text[text.length-1].text.questionnaire_id
    strLast = text[text.length-1].text.string;
    
  }
 console.log(questID);
    function GenerateQRCode () {
        qr = "qck.app/" + questID; 
        QRCode.toDataURL(qr, {
        width: 400,
        margin: 2,
        color: {
              dark: '#335383FF'
          }
      }, (err, qr) => {
          if (err) return console.error(err)
          return qr;
      })
  }
  console.log(qr);

  const copyToClipboard = () => {
    copy(questID);
    alert(`You have copied "${questID}"`);
 }
 const copyToClipboardUrl = () => {
  copy(url);
  alert(`You have copied "${url}"`);
}
const copyToClipboardUrlRes = () => {
const i = "qck.app/" + questID + "/results/" + strLast
copy(i);
alert(`You have copied "${i}"`);
}




 
window.onload = GenerateQRCode;
window.onload = handleSubmitt;

   
    return (
      <div>
           <h1 >QR Generator</h1>
           <h1  >{questID}</h1>
           <Button   onClick={copyToClipboard}>&#128203;</Button>
           <h1  >qck.app/{questID}/</h1>
           <Button   onClick={copyToClipboardUrl}>&#128203;</Button>
           <h1>qck.app/{questID}/results/{strLast}</h1>
           <Button   onClick={copyToClipboardUrlRes}>&#128203;</Button>
                {qr && <>
                     <img src={url} alt="s"/>
                    <Button variant='contained' color='success' href={qr} download="qrcode.png">Download</Button>
                </>}
 
      </div>
    )
}

    export default Code





  