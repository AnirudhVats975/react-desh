import React from 'react';
import "./PartnerList.css";
import { PartnerListData } from '../../Data';

const PartnerList = () => {
    return (
        <>
        <div className="partnerList">
            <div className="partnerListLinks">
                <ul>
                    <li><a href="">Other Line</a></li>
                    <li><a href="">Notes</a></li>                 
                </ul>
                </div>
                <div className="partnerListInfo">
                 <ul className="partnerListInfoHeading">

                    <div className="col-10"> <li><input type="checkbox" /></li></div>
                    <div className="col-10"> <li>Partner Code</li></div>
                    <div className="col-10"> <li>Partner Name</li></div>
                    <div className="col-10"> <li>Class</li></div>
                    <div className="col-10"> <li>Location Name</li></div>
                    <div className="col-10"> <li>Location code</li></div>
                    <div className="col-10"> <li>RMN</li></div>
                    <div className="col-10"> <li>Creation Date</li></div>
                    <div className="col-10"> <li>Status</li></div>
                    <div className="col-10"> <li>Add</li></div>
                 </ul>

                 <div className="partnerTab">
                       {
                           PartnerListData.map((item)=>{
                               return(
                                   <>
                                  
                                     <ul className="partnerListInfoDet">
                                   <div className="col-10"> <li><input type="checkbox"  /></li></div>
                                   <div className="col-10"> <li>{item.partnercode}</li></div>
                                  <div className="col-10"> <li>{item.partnername}</li></div>
                                   <div className="col-10"> <li>{item.classs}</li></div>
                                  <div className="col-10"> <li>{item.locationname}</li></div>
                                <div className="col-10"> <li>{item.locationname}</li></div>
                                 <div className="col-10"> <li>{item.rmn}</li></div>
                                 <div className="col-10"> <li>{item.creationdate}</li></div>
                                <div className="col-10"> <li>{item.status}</li></div>
                               <div className="col-10"> <li>{item.remove}</li></div>
                               </ul>
                              
                                   </>
                               )
                           })
                       }
                 </div>
                 
                 <div className="partnerListInfoFotter">
                     <div className="partnerListFooterLeft">
                         <p>showing 1 to 21 of <span>14497</span> Entries</p>
                     </div>
                     <div className="partnerListFooterRight">
                         <div className="pages">
                             <p>Row per pages 10 <span><i className="fas fa-sort-down"></i></span></p>
                         </div>
                         <div className="pageInfo">
                             <p>1-10 of 246</p>
                         </div>
                         <div className="pageslider">
                             <span><i className="fas fa-caret-left"></i></span>
                              <span><i className="fas fa-caret-right"></i></span>
                         </div>
                     </div>

                 </div>
                
               
            </div>
        </div>
        </>
    )
}

export default PartnerList
