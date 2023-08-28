import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { thunkAddToCart } from "../../store/orders";
import { thunkGetUsersSavedItems, thunkRemoveSavedItem } from "../../store/saveLater";





export default function AddCartFromSaved({savedId, userId, productId}){
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(thunkRemoveSavedItem(savedId))
        .then(() => dispatch(thunkAddToCart(productId, userId, {quantity:1})))
        // .then(()=> thunkGetUsersSavedItems(userId))
    }

    return (
        <>
            <button className="AddSavedItemToCart" onClick={handleClick}>Add to Cart</button>
        </>
    )
}
