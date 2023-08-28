
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkDeleteSavedItem, thunkGetUsersSavedItems } from "../../store/saveLater";



export default function DeleteSavedItem({savedId, userId}){
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(thunkDeleteSavedItem(savedId))
        .then(()=> dispatch(thunkGetUsersSavedItems(userId)))
    }

    return (
        <>
            <button className="RemoveItemFromSaved" onClick={handleClick}>Remove</button>
        </>
    )
}
