import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="headerWrapper">
                <div className="headerLeft">
                    <h1 className="HeaderLeftHeading">Market Sales Details</h1>

                    <ul className="headerList">
                        <li><a href="">Dashboard</a> <span><i className="fas fa-angle-right"></i></span></li>
                        <li><a href="">Mata Data</a> <span><i className="fas fa-angle-right"></i></span></li>
                        <li><a href="">Partners</a> <span><i className="fas fa-angle-right"></i></span></li>
                        <li><a href="">Business</a></li>

                    </ul>
                </div>
                  <div className="HeaderRight">
                      <ul  className="topNav">
                          <li><i className="far fa-bell"></i></li>
                          <li><i className="far fa-user"></i> <span><i className="fas fa-angle-down"></i></span></li>
                      </ul>
                       <ul className="bottomNav">
                       <li><a href=""><i className="fas fa-plus"></i><span>add</span></a></li>
                       <li><a href=""><i className="fas fa-sliders-h"></i></a></li>
                       <li><a href=""><i className="fas fa-cloud-upload-alt"></i></a></li>
                       <li><a href=""><i className="fas fa-undo"></i></a></li>
                       <li><a href=""> <i className="fas fa-file-pdf"></i></a></li>
                       <li><a href=""><i className="fas fa-file-csv"></i></a></li>
                       </ul>
                  </div>
            </div>
            </div>
        </>
    )
}

export default Header
