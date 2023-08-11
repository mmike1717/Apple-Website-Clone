import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link, useParams } from "react-router-dom";
import thunkEditOrdersQuantity from "../../store/orders";

function OrderQuantity({quantity, product_id}) {
    // const dispatch = useDispatch()
    // const [quant, setQuant] = useState('')


    // useEffect(() => {
    //     if(quant.length > 0){
    //         dispatch(thunkEditOrdersQuantity(product_id, quant))
    //     }
    // }, [quant])

    // const onChange = async () =>{
    //     const res = await dispatch(thunkEditOrdersQuantity(product_id, quant))
    //     console.log(res, 'helloooooooooooooo')
    // }



    return (
        null
        // <>
        //     <select onChange={(e) => {
        //         setQuant(e.target.value)
        //         }}>
        //         <option >{quantity}</option>
        //         <option value="2">2</option>
        //         <option value="3">3</option>
        //         <option value="4">4</option>
        //         <option value="5">5</option>
        //         <option value="6">6</option>
        //         <option value="7">7</option>
        //         <option value="8">8</option>
        //         <option value="9">9</option>
        //         <option value="10">10</option>
        //     </select>
        // </>

    )
}

export default OrderQuantity
