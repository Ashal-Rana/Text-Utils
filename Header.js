import React from 'react'
import { Link } from 'react-router-dom';


export default function Header(props) {
  
  const navbarContent = document.querySelector('#navbarSupportedContent');
  console.log(navbarContent);

  
  return (
<>
      {/* <h1>Welcome to my first project </h1> */}
      
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.Navbar}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'./About'} >{props.Link}</Link>
              </li>
              <li className="nav-item dropdown">

              </li>
              <li className="nav-item">
                {/* <a className="nav-link " aria-disabled="true">Disabled</a> */}
              </li>
            </ul>
            <form className="d-flex " role="search">
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode2} role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label mt-3" htmlFor="flexSwitchCheckDefault" >{props.text2}</label>
              </div>
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label mt-3" htmlFor="flexSwitchCheckDefault" >{props.text}</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>

  )
}
