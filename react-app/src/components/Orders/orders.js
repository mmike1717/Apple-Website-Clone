import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link, useParams } from "react-router-dom";
import { thunkEditOrdersQuantity, thunkGetOrdersForCart } from "../../store/orders";
import DeleteOrder from "../DeleteOrder/deleteOrder";


function CartOrders() {
    const [quant, setQuant] = useState()
    const [editOrderId, setEditOrderId] = useState()
    const dispatch = useDispatch()

    const sessionUser = useSelector((state) => state.session.user);


    useEffect(() => {
        dispatch(thunkGetOrdersForCart(sessionUser.id))
    }, [dispatch])


    useEffect(() => {
        if(editOrderId){
            dispatch(thunkEditOrdersQuantity(editOrderId, quant))
            .then(() => dispatch(thunkGetOrdersForCart(sessionUser.id)))
        }
    }, [quant])

    // const onChange = async () =>{
    //         await dispatch(thunkEditOrdersQuantity(editOrderId, quant))
    //         .then(() => dispatch(thunkGetOrdersForCart(sessionUser.id)))

    //     }
    // if(sessionUser === undefined) return null

    const allOrders = Object.values(useSelector(state => state.orders.cart))

    if(!allOrders.length || !allOrders) return null
    console.log(allOrders,'this-----')


    return (
        <>
            <h1>Review Your Bag</h1>
            {allOrders.map((order) => {
                return (
                    <>
                        {order && order.products && <div>

                            {order.products?.name}
                            {order.products?.storage}GB
                            {order.products?.color}
                            <select onChange={(e) => {
                                setEditOrderId(order?.id)
                                setQuant(e.target.value)
                            }}>
                                <option >{order?.quantity}</option>
                                {order?.quantity !== 1 ? <option value='1' >1</option> : null}
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            {/* <OrderQuantity quantity={order.quantity} product_id={order.product_id}/> */}
                            <div>{order.quantity * order.products?.price}</div>
                            <DeleteOrder orderId={order?.id} userId={sessionUser.id} />
                        </div>}


                    </>
                )
            })}
        </>
    )
}


export default CartOrders
