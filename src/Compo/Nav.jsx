import React from 'react'

function Nav() {
  return (
    <div>
      <nav className="custom-navbar" data-spy="affix" data-offset-top="40" >
        <div className="container">
          <a className="logo" href="#">
            MaNu
          </a>
          <ul className="nav">
            <li className="item">
              <a className="link" href="#home">
                Home
              </a>
            </li>
            <li className="item">
              <a className="link" href="#about">
                About
              </a>
            </li>
            <li className="item">
              <a className="link" href="#portfolio">
                Projects
              </a>
            </li>
            {/* <!-- 
                <li className="item">
                    <a className="link" href="#testmonial">Testmonial</a>
                </li> --> */}
            {/* <!-- <li className="item">
                    <a className="link" href="#blog">Blog</a>
                </li> --> */}
            <li className="item">
              <a className="link" href="#contact">
                Contact
              </a>
            </li>
            {/* <!-- <li className="item ml-md-3">
                    <a href="components.html" className="btn btn-primary">Components</a>
                </li> --> */}
          </ul>
          <a
            href="javascript:void(0)"
            id="nav-toggle"
            className="hamburger hamburger--elastic"
          >
            <div className="hamburger-box">
              {/* <div className="hamburger-inner"></div> */}
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav
