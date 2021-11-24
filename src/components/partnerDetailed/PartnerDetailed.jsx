import React from 'react';
import "./PartnerDeailed.css";

const PartnerDetailed = ({PartnerDetailedName, PartnerDetailedInfo}) => {
    return (
        <>
            <div className="partnerDeailed">
                <h5>{PartnerDetailedName}</h5>
                <p>{PartnerDetailedInfo}</p>
            </div>
        </>
    )
}

export default PartnerDetailed
