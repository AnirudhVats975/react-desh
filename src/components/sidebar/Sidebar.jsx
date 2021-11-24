import React, {useState} from 'react';
import './Sidebar.css';
import { SideBarData } from '../../Data';


const Sidebar = () => {


    const [show,setShow] =useState()

    const dropDownHandler = () =>{
        setShow(!show);
    }
    return (
        <>
            <div className="sidebar">
             <div className="sideBarWrapper">
                 <div className="profileInfo">
                     <div className="profileImg">
                         <img src="https://picsum.photos/200" alt="profile img" />
                     </div>
                     <div className="ProfileName">
                         <h1>Akzonobel Paints</h1>
                         <p>India Pvt. Ltd</p>
                     </div>
                 </div>
                 <div className="sideBarContent">
                     <div className="sideContentWrapper">
                         <div className="deshboardHeading">
                         <span><i className="fas fa-home"></i> </span>
                         <h3> Dasboard</h3>
                         </div>
                          <div className="sidebarList">
                              <ul className="sidebarDrop">
                                  <li><span><i className="fas fa-home"></i></span><a href="">Product Logistics</a><span onClick={dropDownHandler}><i className="fas fa-plus"></i></span></li>
                              </ul>
                              <ul className="sidebarListDropContent">
                                  {show ? <div>   
                                  <li><a href="">Print Reqest Summary</a></li>
                                  <li><a href="">Uploads And Downloads</a></li>
                                  <li><a href="">Plant Logistics</a></li>
                                    </div> : ""}
                              </ul>
                              {
                                  SideBarData.map((item)=>{
                                      return(
                                          <>
                                         <div key={item.id} >
                                             <ul>
                                                 <li><span>{item.logo}</span><a href="">{item.name}</a>
                                                 </li>                     
                                             </ul>
                                         </div>
                                        
                                          </>
                                      )
                                  })
                              }
                          </div>
                    
                     </div>

                 </div>
             </div>
            </div>
        </>
    )
}

export default Sidebar
