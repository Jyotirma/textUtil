import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
    <div>
<nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
      </ul>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} mode</label>
      </div>
    </div>
  
</nav>
</div>
  </>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired}

Navbar.defaultProps = {
  title: 'title is here'
};