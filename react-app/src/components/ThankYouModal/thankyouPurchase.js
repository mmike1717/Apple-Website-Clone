import React from "react";
import { useHistory } from "react-router-dom";
import './thankyou.css'
import { useModal } from "../../context/Modal";






function ThankYouInfo(){
const history = useHistory()
const { closeModal } = useModal()

const handleClick = () => {
    history.push('/')
    closeModal()
}


    return (
        <div className="MainContainerForThanks">
            <div className="BackHomeButtonContainer">
                <button className="BackHomeButton" onClick={() => handleClick()}> {'<'} Return Home</button>
            </div>
            <img alt="Thank you image" className="ThankYouImg" src="https://www.amacusg.gatech.edu/wiki/images/e/e5/Apple_Logo.png" />
            <div className="ThankYouTitleText">Thank you for shopping with Apple.</div>
            <div>Your order will be fulfilled.</div>
            <div className="SmallParagraph">We have successfully received your payment and will reflect in your statement when your order is complete.</div>

        </div>
    )
}

export default ThankYouInfo;
