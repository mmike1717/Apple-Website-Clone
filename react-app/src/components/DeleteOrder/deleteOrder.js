import { useDispatch } from "react-redux"
// import { useState } from "react"
import { thunkDeleteAOrder, thunkGetOrdersForCart } from "../../store/orders"


export default function DeleteOrder ({orderId, userId}) {
    const dispatch = useDispatch()

    const deleteOrder = () => {
        dispatch(thunkDeleteAOrder(orderId))
        .then(()=> dispatch(thunkGetOrdersForCart(userId)))
    }

    return (

        <div>
            <button className="DeleteOrderButton" onClick={(e) => {
                deleteOrder()
            }}
            >Remove</button>
        </div>

    )

}
