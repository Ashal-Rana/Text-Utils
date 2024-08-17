import React, { useState } from 'react'
import "./input.css"






export default function Input(props) {

  //////////Hello promot/////////


  let [user, setUser] = useState("Enter an name");


  const myuser = () => {
    let person = prompt("Enter Your name");
    if (person === null || person === "") {
      console.log("you are not welcome");
    } else {
      user = setUser("you are welcome " + person);
    }
  }

  const [text, setText] = useState("");



  const OnClickchange = () => {
    console.log("Add the text " + text);
    let uppercase = text.toUpperCase();
    setText(uppercase);

  }

  const OnClickchange2 = () => {
    console.log("Add the text " + text);
    let lowercase = text.toLowerCase();
    setText(lowercase);
  }

  const char = () => {
    console.log("Add the text" + text);
    let Charactar = text.charAt();
    setText(Charactar);

  }

const charlast = ( ) => {
  console.log("Add the text" + text);
  let Character = text.charAt(text.length-1);
  setText(Character);
}

  const Handleonchange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  }

  const Clear = () => {
    setText("")
  }

const Copytext = () => {
let copytext = document.getElementById("exampleFormControlTextarea2")
copytext.select();
copytext.setSelectionRange(0, 99999);
navigator.clipboard.writeText(copytext.value);
// alert("Copied the text: " + copytext.value);
}

  return (

    <>
      <div className="container">
        <button className='btn btn-outline-info mt-4 ml-4' onClick={myuser}>First Enter name</button>
        <div className="mb-3, mt-4">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" value={user} onChange={Handleonchange} style={{backgroundColor : props.mode==='dark'?'gray':'white',color : props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <h1 style={{color : props.mode==='dark'?'white':'black'}}>Enter the text</h1>
        <div className="mb-3, mt-4">
          <textarea className="form-control" placeholder='Enter the text' id="exampleFormControlTextarea2" rows="6" value={text} onChange={Handleonchange} style={{backgroundColor : props.mode==='dark'?'gray':'white',color : props.mode==='dark'?'white':'black'}}>  </textarea>
        </div>
      <button className='btn btn-outline-info mt-4 ml-4 mx-1' onClick={OnClickchange}> Upper case </button>
        <button className='btn btn-outline-info mt-4 ml-4 mx-3' onClick={OnClickchange2}> Lowwer case </button>
        <button className='btn btn-outline-info mt-4 ml-4' onClick={char}> First char  </button>
        <button className='btn btn-outline-info mt-4 ml-4 mx-4' onClick={charlast}> Lasr char  </button>
        <button className='btn btn-outline-info mt-4 ml-4 ' onClick={Copytext}> Copy text </button>
        <button type="button" className="btn btn-outline-info mt-4 ml-4 mx-3" onClick={Clear} > Clear All text</button>


      </div>
      <div className="xontainer">
        <h1 className='m-3' style={{color : props.mode==='dark'?'white':'black'}}>Text summary</h1>
      <p className='m-4' style={{color : props.mode==='dark'?'white':'black'}}>Text Utiles char {text.split(" ").length-1} and number is {text.length}</p>
      <h1 className='m-3' style={{color : props.mode==='dark'?'white':'black'}}>Text preview</h1>
      <p className={`prview mx-4` }  style={{color : props.mode==='dark'?'White':'Black'}}>{text}</p>
      </div>

    </>
  )
}