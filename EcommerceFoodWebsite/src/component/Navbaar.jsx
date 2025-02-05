// import { NavLink } from 'react-router-dom'

import { NavLink } from "react-router-dom";

export default function Navbaar() {

  
  return (
    <div>
      <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <a className="navbar-brand logo" href="#">
                <img src="https://codingcirculate-restaurant-design.on.fleek.co/static/media/logo.bbdaaa34654aff804cc3.png" alt="" />
              </a>
            </div>

          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="col-lg-9 col-md-9">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 active  ">

                <li className="nav-item">
                  <NavLink className="nav-link active " aria-current="page" to="/">Home</NavLink>
                </li>

                 <li className="nav-item">
                  <NavLink className="nav-link" to="/about">about</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/menu">menu</NavLink>
                </li> 
                
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">products</NavLink>
                </li> 

                <li className="nav-item">
                  <NavLink className="nav-link" to="/review">review</NavLink>
                </li> 

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">contact</NavLink>
                </li> 

                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">blog</NavLink>
                </li> 
                   
              </ul>

            </div>
          </div>
        </div>
      </nav>
      </header>

    </div>
  )
}
