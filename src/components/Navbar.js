import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

function Navbar(props) {

  
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          

          <div className = "d-flex">
            <div className = "bg-success rounded mx-2 my-2"  onClick = {()=>props.toggleMode('success')} style={{height: '25px', width:'25px', cursor:'pointer'}}></div>
            </div>
            <div className = "d-flex">
            <div className = "bg-warning rounded mx-2 my-2"  onClick = {()=>props.toggleMode('warning')} style={{height: '25px', width:'25px', cursor:'pointer'}}></div>
            </div>
            <div className = "d-flex">
            <div className = "bg-danger rounded mx-2 my-2"  onClick = {()=>props.toggleMode('danger')} style={{height: '25px', width:'25px', cursor:'pointer'}}></div>
            </div>
          
         

{/* <div class="container mt-0">
            
            <input type="checkbox" 
                   data-toggle="switchbutton" 
                   checked data-width="20" 
                   data-onstyle="success" />
            <input type="checkbox" 
                   data-toggle="switchbutton" 
                   checked data-width="100"
                   data-onstyle="danger" /><br />
            <br />
            <input type="checkbox"
                   data-toggle="switchbutton"
                   checked data-width="100" 
                   data-onstyle="warning" />
            <input type="checkbox" 
                   data-toggle="switchbutton"
                   checked data-width="100"
                   data-onstyle="info" /><br />
            <br />
           
        </div> */}






          <div
            className={`custom-control custom-switch text-${
              props.mode === "light" ? "dark" : "light"
            } mx-5`}
          >
            <input
              type="checkbox"
              className="custom-control-input"
              onClick={()=>props.toggleMode(null)}
              id="customSwitch1"
            />
            <label class="custom-control-label" for="customSwitch1">
              Enable Dark Mode
            </label>
          </div>

{/* 
          <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div> */}


{/* <nav class="nav" style={{marginTop: '0.5rem'}}>
                <input type="checkbox" class="checkbox" id="checkbox" style={{opacity: '0',
    position: 'absolute'}}/>
                <label for="checkbox" class="label">
                    <i class="fas fa-moon"></i>
                    <i class="fas fa-sun"></i>
                    <div class="ball"></div>
                </label>
            </nav> */}




          

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};

export default Navbar;
