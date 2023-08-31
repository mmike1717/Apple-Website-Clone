import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkDeleteAllOrdersFromCart, thunkEditOrdersQuantity, thunkGetOrdersForCart, thunkRemoveItemFromCart } from "../../store/orders";
import { thunkAddToSaveLater } from "../../store/saveLater";
import DeleteOrder from "../DeleteOrder/deleteOrder";
import Footer from "../Footer";
import ThankYouModal from "../ThankYouModal/modalThanksForPurchase";
import ThankYouInfo from "../ThankYouModal/thankyouPurchase";
import './orders.css'


function CartOrders() {
    const [quant, setQuant] = useState()
    const [editOrderId, setEditOrderId] = useState()
    const dispatch = useDispatch()
    const history = useHistory()
    let subtotal = 0;


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

    // if(!allOrders.length || !allOrders) return null
    // console.log(allOrders,'this-----')


    const handleCheckout = () => {
        // e.preventDefault()
        dispatch(thunkDeleteAllOrdersFromCart(sessionUser.id))
        .then(() => history.push('/'))
    }

    const handleSaveLater = (e,productId, userId, orderId) => {
        e.preventDefault()
        dispatch(thunkAddToSaveLater(productId, userId))
        .then(() => dispatch(thunkRemoveItemFromCart(orderId)))
    }


    return (
        <>
            <div className="WholeContainerForCheckOut">
                <div className="TitleForCheckoutBag">{ !allOrders.length ? 'Your Bag is Empty' : "Review your bag."}</div>
                <div className="ReturnText">Free delivery and free returns.</div>
                <div className="PromoForCard"> <img src="https://pbs.twimg.com/profile_images/1163895675513274368/gk5MAZvy_400x400.png" />
                    Items not purchased with a one time payment may be eligible for monthly installments at 0% APR when you check out with Apple Card Monthly Installments.
                    <a onClick={() => window.alert('Feature Coming Soon')} style={{cursor:'pointer'}}>Learn more</a>
                </div>
                {allOrders.map((order) => {
                    subtotal += order?.quantity * order.products?.price
                    subtotal += order.products?.storage === 256 ? 100 : order.products?.storage === 512 ? 200 : 0
                    return (
                        <>
                            {order && order.products && <div className="EachItemMainContainer">
                                <img className="ImgForEachItem" src={order.products?.image} />
                                <div className="ContainerNextToImg">
                                    <div className="ContainerHoldingItemDetails">
                                        <div className="ContainerItemNameColor">
                                            <div>{order.products?.name} {order.products?.model} {order.products?.storage}GB -</div>
                                            <div>{order.products?.color}</div>
                                        </div>
                                        <select className="SelectQuantityInput" onChange={(e) => {
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
                                        <div className="PriceAndRemoveContainer">
                                            <div>${order.quantity * order.products?.price + (order.products?.storage === 256 ? 100 : order.products?.storage === 512 ? 200 : 0)}.00</div>
                                            <DeleteOrder orderId={order?.id} userId={sessionUser.id} />
                                            <a onClick={(e) => handleSaveLater(e,order.products?.id, sessionUser.id, order?.id)} href="">Save for later</a>
                                        </div>
                                    </div>
                                    <div className="ContainerDeliverPickupTexts">
                                        <div className="DeliveryText"> <i className="fa fa-box"/>Order today. Delivers to you by tomorrow — Free</div>
                                        <div className="PickUpText">
                                            <img className="BagLogoForPickUp" src="https://jackboxgames.b-cdn.net/wp-content/uploads/2019/05/11-Mac-App-Store-e1558564279266.png"/>
                                            Order now. Pick up, in-store: Today at
                                            <a href="">You Store</a>
                                        </div>
                                    </div>
                                </div>
                            </div>}


                        </>
                    )
                })}


                <div className="MainTotalTaxesContainer">
                    <div className="SubtotalContainer">
                        <div>Subtotal</div>
                        <div>${subtotal}.00</div>
                    </div>
                    <div className="SubtotalContainer">
                        <div>Shipping</div>
                        <div>FREE</div>
                    </div>
                    <div className="SubtotalContainer Tax">
                        <div>Estimated tax</div>
                        <div>${Number.parseFloat(subtotal * .0887).toFixed(0)}.00</div>
                    </div>

                    <div className="FullTotalContainer">
                        <div>Total</div>
                        <div>${subtotal + parseInt(Number.parseFloat(subtotal * .0887).toFixed(2))}.00</div>
                    </div>
                    {/* <button className="CheckOutButtonInCart" onClick={() => handleCheckout()}>
                        Check Out
                    </button> */}
                    {!allOrders.length ? null :

                        <ThankYouModal
                            buttonText="Check Out"
                            modalComponent={<ThankYouInfo />}
                            onButtonClick={() => handleCheckout()}
                        />
                    }
                </div>


                <div className="ArrivalsContainer">
                    <div className="NewArrivalsTitle">New Arrivals</div>
                    <div className="ArrivalText">Check out the lastest accessories.</div>
                    <a onClick={() => window.alert('Feature Coming Soon')} className="AtagForShop" style={{cursor:'pointer'}}>{'Shop >'}</a>
                    <img className="PictureOfNewArrivals" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-new-arrivals-checkout-201804_FMT_WHH?wid=1472&hei=880&fmt=jpeg" />

                </div>

            </div>

            <Footer />
        </>
    )
}


export default CartOrders
