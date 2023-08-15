import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import './thankyou.css'




function thankYouInfo(){
// const history = useHistory()

    return (
        <div className="MainContainerForThanks">
            {/* <button onClick={() => history.push('/home')}> {'<'} Return Home</button> */}
            {/* <img src="https://assets.stickpng.com/images/616056ef76000b00045a7d9d.png" /> */}
            <div>Thank you for shopping with Apple</div>
            <div>Your order will be fulfilled</div>
            <div>We have successfully received your payment and will reflect in your statement when your order is complete</div>

        </div>
    )
}

export default thankYouInfo;
