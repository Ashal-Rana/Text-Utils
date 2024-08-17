// import logo from './logo.svg';
// import './App.css';
import Header from "./header component/Header";
import Input from "./header component/Input"
import About from "./header component/About"
import React, { useState } from "react";
import Alert from "./header component/Alert";
import { Routes, Route } from 'react-router-dom';
//////////Router///////////
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [text, myText] = useState("Enable dark mode")
  const [text2, myText2] = useState("Enable green mode")

  const [alert, setAlert] = useState(null)



  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode2 = () => {
    if (mode === "light") {
      setMode("Green")
      myText2("Enable light Mode")
      document.body.style.backgroundColor = "green"
      showalert("Green mode is Enable")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }



  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      myText("Enable light Mode")
      document.body.style.backgroundColor = 'black';
      showalert("dark mode is on")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showalert("Light mode is on")
    }
  }


  return (
    <>
      <Router>
        <div className="App">
          <Header Navbar="TextUtiles" Link="About Us" mode={mode}
            text={text}
            toggleMode={toggleMode}
            text2={text2}
            toggleMode2={toggleMode2}
          />
          <Alert alert={alert} />
          <Routes>
            <Route path="/about" element={<About/>}
            toggleMode={toggleMode} />
            <Route path="/" element={<Input/>} />
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
