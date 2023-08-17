import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './thankyou.css'




function ThankYouInfo(){
const history = useHistory()

    return (
        <div className="MainContainerForThanks">
            <div className="BackHomeButtonContainer">
                <button className="BackHomeButton" onClick={() => history.push('/home')}> {'<'} Return Home</button>
            </div>
            <img className="ThankYouImg" src="https://www.amacusg.gatech.edu/wiki/images/e/e5/Apple_Logo.png" />
            <div className="ThankYouTitleText">Thank you for shopping with Apple.</div>
            <div>Your order will be fulfilled.</div>
            <div className="SmallParagraph">We have successfully received your payment and will reflect in your statement when your order is complete.</div>

        </div>
    )
}

export default ThankYouInfo;
