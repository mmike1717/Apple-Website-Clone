import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect,Link,useParams, useHistory } from "react-router-dom";
import { thunkAddToCart, thunkEditOrdersQuantity, thunkGetOrdersForCart } from "../../store/orders";
import { thunkCreateProduct, thunkGetSingleItem } from "../../store/products";
import Footer from "../Footer";
import Reviews from "../Reviews";
import './singleItem.css'



function CreateProduct(){
    const sessionUser = useSelector((state) => state.session.user);
    const [storage, setStorage] = useState(0)
    const [color, setColor] = useState('')
    const [errors, setErrors] = useState({})
    // const [noMatch, setNoMatch] = useState(true)
    // const [picked3, setPicked3] = useState('')
    // const [picked4, setPicked4] = useState('')
    // const [picked5, setPicked5] = useState('')
    const {itemId} = useParams()
    const history = useHistory()

    const dispatch = useDispatch()

    let todayDate = new Date()
    const date = todayDate.getDate()
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const deliveryMonth = todayDate.getMonth()

    useEffect(()=> {
        // const func = async() => {
        dispatch(thunkGetSingleItem(itemId))
        //     .then((res)=>setItem(res))
        // }
        // func()
    }, [dispatch, itemId])


    useEffect(() => {
        if(sessionUser?.id){

            dispatch(thunkGetOrdersForCart(sessionUser.id))
        }

    }, [dispatch])



    const item = useSelector(state=> state.products.singleItem)
    const itemsInCart = Object.values(useSelector(state=> state.orders.cart))

    if(!Object.values(item).length) return null
    // if(!Object.values(itemsInCart).length) return null


    let match = true;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!storage){
            setErrors({storage: 'Need to pick the Storage you would like.'})
        }
        if(!color){
            setErrors({color: 'Need to pick the Color you would like.'})
        }

        // if(itemsInCart){
        //         itemsInCart.map(cartItem => {
        //             if(cartItem.products.color === color && cartItem.products.storage === storage &&
        //                 cartItem.products.name === item.name && cartItem.products.model === item.model){
        //                     setNoMatch(false)
        //                     dispatch(thunkEditOrdersQuantity(cartItem.id, cartItem.quantity + 1))
        //                     .then(() => dispatch(thunkGetOrdersForCart(sessionUser.id)))
        //                     .then(() => history.push('/bag'))

        //                 }
        //         })
        //     }

        itemsInCart.map(cartItem => {
            if(cartItem.products.color === color && cartItem.products.storage === storage &&
                cartItem.products.name === item.name && cartItem.products.model === item.model){
                    match = false
                    dispatch(thunkEditOrdersQuantity(cartItem.id, cartItem.quantity + 1))
                    // .then(() => dispatch(thunkGetOrdersForCart(sessionUser.id)))
                    .then(() => history.push('/bag'))
                    // return


                }
        })

        if (match && storage && color){
            let data = {
                name: item.name,
                model: item.model,
                price: item.price,
                storage,
                color,
                image: item.image
            }

            let order = {
                status: 'available',
                quantity: 1
            }

            await dispatch(thunkCreateProduct(data))
            .then((res) => {dispatch(thunkAddToCart(res.id, sessionUser.id, order))})
            .then(()=> {history.push('/bag')})
        }

    }


    return (
        <div>
            <div className="DivBelowNavBar">Get $200-$640 in credit when you trade in an {item.name}</div>
            <div>
                <div className="CarrierPromoTextContainer">
                    <div>Carrier Deals at Apple</div>
                    <img className="CarrierLogo" src="https://www.nicepng.com/png/detail/24-242649_at-t-globe-at-t-adworks-logo-png.png" />
                    <div className="PriceTextForPromo">Pay as low as $0 after trade-in.</div>
                    <img className="CarrierLogo" src="https://cdn.iconscout.com/icon/free/png-256/free-t-mobile-3521754-2945198.png" />
                    <div className="PriceTextForPromo2">Pay as low as $8.30/mo. after trade-in.</div>
                    <img className="CarrierLogo" src="https://cdn.iconscout.com/icon/free/png-256/free-verizon-3629136-3030276.png" />
                    <div className="PriceTextForPromo2">Pay as low as $15.52/mo. after trade-in</div>
                </div>
            </div>
            <div>
                <div className="MainTitleOfItem"> Buy {item.name} {item.model !== 'reg' ? item.model : null}</div>
            </div>
            <div className="MainImageAndPriceContainer">
                <img className="ImageForItem" src={item.image}/>
                <div className="PriceColorStorageContainer">
                    <div className="TextOfWordModel">Model. <div>The Model you picked</div></div>
                    <button className="ButtonPickingTheModel">
                        <div>{item.name} {item.model !== 'reg' ? item.model : null}</div>
                        <div className="PricePerMonthContainer">From {item.price} or {Number.parseFloat(item.price / 12).toFixed(2)}/mo. for 12 mo. before trade-in </div>
                    </button>

                    <button className="NeedHelpButton">
                        <div onClick={() => window.alert('Feature Coming Soon')} className="NeedHelpText">Need help? <i className="fa fa-circle-plus"/></div>
                        <div className="TextBelowHelpText">Explore the differences in screen size and battery life.</div>
                    </button>

                    <div className="TextForColor">Finish. <div className="Text2ForColor">Pick you favorite</div> </div>
                    <div className="ColorBeingPickedText">Color - {color}</div>

                    <div className="PickColorMainContainer">
                        <div className={`OuterButtonDiv ${color === 'Red' ? 'red' : ''}`}>
                            <button className={`ColorButton b1`} onClick={()=> setColor('Red')}></button>
                        </div>
                        <div className={`OuterButtonDiv ${color === 'Blue' ? 'blue' : ''}`}>
                            <button className={`ColorButton b2`} onClick={()=> setColor('Blue')}></button>
                        </div>
                        <div className={`OuterButtonDiv ${color === 'Purple' ? 'purple' : ''}`}>
                            <button className={`ColorButton b3`} onClick={()=> setColor('Purple')}></button>
                        </div>
                        <div className={`OuterButtonDiv ${color === 'Midnight' ? 'mid' : ''}`}>
                            <button className={`ColorButton b4`} onClick={()=> setColor('Midnight')}></button>
                        </div>
                        <div className={`OuterButtonDiv ${color === 'Starlight' ? 'star' : ''}`}>
                            <button className={`ColorButton b5`} onClick={()=> setColor('Starlight')}></button>
                        </div>
                    </div>

                    <div className="StorageTextSection"> Storage. How much space do you need?</div>

                    <button className={`EachStorageButton ${storage === 256 ? 'stor256' : ''}`} onClick={()=> setStorage(256)}>
                        256 GB
                        <div className="PricePerMonthContainer" >From {parseInt(item.price) + 100} or ${Number.parseFloat((parseInt(item.price) + 100.99)/12).toFixed(2)}/mo. for 12 mo. before trade‑in</div>
                    </button>
                    <button className={`EachStorageButton ${storage === 512 ? 'stor512' : ''}`} onClick={()=> setStorage(512)}>
                        512GB
                        <div className="PricePerMonthContainer">From {parseInt(item.price) + 200} or ${Number.parseFloat((parseInt(item.price) + 200.99)/12).toFixed(2)}/mo. for 12 mo. before trade‑in</div>
                    </button>
                </div>


            </div>


            <div className="AppleTradeInText">Apple Trade In. <div>Get $40–$640 credit toward your new {item.name}.</div> </div>
            <div className="ButtonsTradeInContainer">
                <button onClick={() => window.alert('Feature Coming Soon')} className="SelectPhoneTradeInButton">Select a smartphone</button>
                <button id="border" className="SelectPhoneTradeInButton">No trade-in</button>
                <button onClick={() => window.alert('Feature Coming Soon')} className="HelpTradeInButton">
                    <i className="fa fa-circle-plus"/>
                    How does trade-in work?
                    <div className="MoreTextForButton">We’ll walk you through the step-by-step process.</div>
                </button>
            </div>


            <div className="AppleTradeInText">AppleCare+ Coverage. <div>Protect your new {item.name}.</div> </div>

            <div className="AppleCareMainContainer">
                <button onClick={() => window.alert('Feature Coming Soon')} className="AppleCareButtons">
                    <div className="AppleLogoAndTextInButton">
                        <img className="AppleCareLogo" src="https://i.pinimg.com/originals/06/f5/44/06f544c02a31f664f83a730e766fc3b0.png"/>
                        AppleCare+
                    </div>
                    <div>$179.00 or $8.99/mo.</div>
                </button>
                <button onClick={() => window.alert('Feature Coming Soon')} className="AppleCareButtons">
                    <div className="AppleLogoAndTextInButton">
                        <img className="AppleCareLogo" src="https://i.pinimg.com/originals/06/f5/44/06f544c02a31f664f83a730e766fc3b0.png"/>
                        AppleCare+ with Theft and Loss
                    </div>
                    <div>$249.00 or $12.49/mo.</div>
                </button>
                <button className="NoAppleCareButton">No AppleCare+ Coverage</button>
            </div>

            <div className="MainContainerForCheckout">
                <div className="ItemNameAndImgContainer">
                    <div className="CheckOutItemName">Your new {item.name} {item.model !== 'reg' ? item.model : null} </div>
                    <div className="JustTheWayText">Just the way You want it.</div>
                    <img src="https://149493502.v2.pressablecdn.com/wp-content/uploads/2015/04/apple-store-app-icon.jpg" />
                </div>
                <div className="DescriptionItemMainContainer">
                    <div className="ItemDescription">{item.name} {item.model !== 'reg' ? item.model : null} {storage === 0 ? '' : storage + 'GB'} {color}</div>
                    <div className="PriceForItem">${storage === 256 ? parseInt(item.price) + 100 : storage === 512 ? parseInt(item.price) + 200 : item.price}</div>
                    <div className="OnePaymentText">One-time payment</div>
                    <a style={{cursor:'pointer'}} onClick={() => window.alert('Feature Coming Soon')}>Get 3% Daily Cash with Apple Card</a>
                </div>
                <div className="DescriptionItemMainContainer">
                    <div className="TruckLogoAndText"> <i className="fa-solid fa-truck"/>Order today. Delivers by</div>
                    <div className="DeliveryMonthDate">{date} {month[deliveryMonth]} - Free</div>
                    <div className="BagLogoAndText"><i className="fa-solid fa-bag-shopping"/>Pickup:</div>
                    <div className="CurrentlyAvailableText">Currently available at <a style={{cursor:'pointer'}} onClick={() => window.alert('Feature Coming Soon')}>Your Store</a></div>
                    {sessionUser && <button className="AddToBagButtonInItemPage" onClick={handleSubmit}>Add To Bag</button>}
                    <div className="ErrorDivUnderButton">{errors.storage ? <div>{errors.storage}</div> : errors.color ? <div>{errors.color}</div> : null}</div>
                </div>
            </div>

            <div className="ReviewsMainContainer">
                <div className="ReviewTitleContainer">Reviews</div>
                <Reviews itemId={itemId} />

            </div>

            <Footer />
        </div>
    )

}


export default CreateProduct;
