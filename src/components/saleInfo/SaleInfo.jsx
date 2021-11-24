import React from "react";
import "./SaleInfo.css";
import PartnerDetailed from "../partnerDetailed/PartnerDetailed";
import PartnerList from "../PartnerList/PartnerList";

const SaleInfo = () => {
  return (
    <>
      <div className="saleInfo">
        <div className="saleInfoContainer">
          <div className="saleInfoHeading">
            <h3>MARKIT SALE DETAILS</h3>
          </div>

          <div className="saleInfoContent">
            <div className="saleInfoContentLeft">
              <PartnerDetailed
                PartnerDetailedName="Partner Code"
                PartnerDetailedInfo="03606000054"
              />

              <PartnerDetailed
                PartnerDetailedName="Partner Name"
                PartnerDetailedInfo="SHREE RAM TRADER"
              />

              <PartnerDetailed
                PartnerDetailedName="RMN"
                PartnerDetailedInfo="03606000054"
              />

              <PartnerDetailed
                PartnerDetailedName="Class"
                PartnerDetailedInfo="DEALER"
              />
            </div>
            <div className="saleInfoContentCenter">
              <PartnerDetailed
                PartnerDetailedName="Promotion Code"
                PartnerDetailedInfo="PSERE"
              />
            </div>

            <div className="saleInfoContentRight">
              <PartnerDetailed
                PartnerDetailedName="Consumer Code"
                PartnerDetailedInfo="PM00104500"
              />

              <PartnerDetailed
                PartnerDetailedName="Consumer Name"
                PartnerDetailedInfo="SHAKEEN 1"
              />

              <PartnerDetailed
                PartnerDetailedName="Consumer RMN"
                PartnerDetailedInfo="5656600"
              />

              <PartnerDetailed
                PartnerDetailedName="Partner Detailes"
                PartnerDetailedInfo="DEALER"
              />
            </div>
          </div>
      
        </div>
      </div>

      <PartnerList/>
    </>
  );
};

export default SaleInfo;
