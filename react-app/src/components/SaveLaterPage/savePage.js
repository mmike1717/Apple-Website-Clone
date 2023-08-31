
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetOrdersForCart } from "../../store/orders";
import { thunkGetUsersSavedItems } from "../../store/saveLater";
import AddCartFromSaved from "../AddOrderFromSaved/fromSavedAddToCart";
import DeleteSavedItem from "../DeleteSavedItem/deleteSaved";
import Footer from "../Footer";
import qrCode from './frame.png'

import './savePage.css'


export default function SaveListPage(){
    const dispatch = useDispatch()
    const user = useSelector(state=> state.session.user)
    const allSaved = Object.values(useSelector(state=> state.saves.allSaves))
    const [hideDetails, setHideDetails] = useState(false)
    const [edit, setEdit] = useState(true)

    useEffect(()=> {
        dispatch(thunkGetUsersSavedItems(user.id))
    },[dispatch])


    useEffect(() => {
        if(user){
            dispatch(thunkGetOrdersForCart(user.id))
        }
    }, [dispatch])


    const handleHiddenDetails = () => {
        if (!hideDetails) setHideDetails(true)
        else{
            setHideDetails(false)
        }
    }


    const handleEdit = () => {
        if (edit) setEdit(false)
        else{
            setEdit(true)
        }
    }



    return (
        <>
            <div className="MainContainerHoldingAll">
                <div className="SavedImgMainContainer"> <img className="SavedImageAtTop" src="https://www.insight.com/content/dam/insight-web/en_US/store/apple/apple-multiproduct-hero-full-suite.png" /></div>
                <div className="SavePageTitle">Your Saved List</div>
                <div className="EditButtonForSavedItem"><a onClick={handleEdit}>Edit</a></div>
                {allSaved.map((saveItem)=>{
                    return (
                        <div className="EachSavedItem">
                            <div>
                                <img className="EachItemSavedImg" src={saveItem.products?.image} />
                            </div>
                            <div className="SavedItemInfoContainer">
                                <div className="ItemInfoText">{saveItem.products?.name} {saveItem.products?.model}</div>
                                <div className="ItemInfoText">{saveItem.products?.storage}GB - {saveItem.products?.color}</div>
                                <div className="SavedItemPrice">${saveItem.products?.price}</div>
                                <div className="SeeDetailsDiv" onClick={handleHiddenDetails}>See Details</div>
                                {hideDetails && <div className="HiddenDetailsContainer">
                                    <div className="LighterTextDetails">Order now. Pick up, in-store: </div>
                                    <div className="DarkerTextDetails">Tomorrow at <a onClick={()=> window.alert('Coming Soon')}>Your Store</a> </div>
                                    <div className="LighterTextDetails">Order today. Delivers to you:</div>
                                    <div className="DarkerTextDetails">In 2 days - Free</div>
                                </div>}
                                {edit ? <AddCartFromSaved savedId={saveItem.id} userId={user.id} productId={saveItem.product_id}/>
                                    : <DeleteSavedItem savedId={saveItem.id} userId={user.id} />}
                                {/* <AddCartFromSaved savedId={saveItem.id} userId={user.id} productId={saveItem.product_id}/>
                                <DeleteSavedItem savedId={saveItem.id} userId={user.id} /> */}
                            </div>
                        </div>
                    )
                })}
                <div className="DivHoldingShareButton">
                    <button onClick={()=>window.alert('Feature Coming Soon')}>Share your List <i className="fa-solid fa-arrow-up-right-from-square"/></button>
                </div>

                <div className="MainContainerForQueations">
                    <div className="TitleForQuestions">Have more questions? We're here to Help.</div>
                    <div className="ContainerFor3-OtherContainers">
                        <div className="ContainerForOtherFeatures">
                            <div className="EachContainerInsideFeatures">
                                <i className="fa-regular fa-comments TextForContainer"/>
                                <div className="TextForContainer">Shop One-on-One with a Specialist online</div>
                                <a onClick={()=>window.alert('Feature Coming Soon')}>Chat with a Specialist {'>'}</a>
                            </div>
                            <div className="EachContainerInsideFeatures">
                                <i className="fa-solid fa-users TextForContainer"/>
                                <div className="TextForContainer">Check out the lastest Features with a Specialist at the Apple Store.</div>
                                <a onClick={()=>window.alert('Feature Coming Soon')}>Reserve a shopping session {'>'}</a>
                            </div>
                        </div>
                        <div className="MainContainerForQRCODE">
                            <i className="fa-solid fa-qrcode"/>
                            <div className="TitleForScan">Scan this code</div>
                            <div className="OtherTextForScan">Easily have access to my LinkedIn account</div>
                            <div className="QrCodeOutsideContainer"> <img src={qrCode} /> </div>
                        </div>
                    </div>
                </div>

            </div>


            <Footer />
        </>
    )
}
