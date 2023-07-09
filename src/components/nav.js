import React from "react";
import './css-components/nav.css'
import WaterDamageSharpIcon from '@mui/icons-material/WaterDamageSharp';

function nav() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-md   " >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
           <img src="./images/cancer.png" alt="cancer-support" height="50px"  />
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
        {/*  dropdownicon */}
           <WaterDamageSharpIcon id="icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <a className="nav-link active  " aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link link   " href="/about">
                About
              </a>
              <a className="nav-link link " href="/donate">
                Donate
              </a>
              <a className="nav-link link  " href="/ourmission">
                Our Mission
              </a>
              <a className="nav-link link  " href="/contact">
                Contact
              </a>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default nav;
