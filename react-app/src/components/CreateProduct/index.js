import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect,Link,useParams, useHistory } from "react-router-dom";
import { thunkAddToCart } from "../../store/orders";
import { thunkCreateProduct, thunkGetSingleItem } from "../../store/products";
import Reviews from "../Reviews";



function CreateProduct(){
    const sessionUser = useSelector((state) => state.session.user);
    const [storage, setStorage] = useState(0)
    const [color, setColor] = useState('')
    const {itemId} = useParams()
    const history = useHistory()

    const dispatch = useDispatch()

    useEffect(()=> {
        // const func = async() => {
        dispatch(thunkGetSingleItem(itemId))
        //     .then((res)=>setItem(res))
        // }
        // func()
    }, [dispatch])

    const item = useSelector(state=> state.products.singleItem)

    if(!Object.values(item).length) return null



    const handleSubmit = (e) => {
        e.preventDefault();


        let data = {
            name: item.name,
            model: item.model,
            price: item.price,
            storage,
            color,
            category_id: 1
        }

        let order = {
            status: 'available',
            quantity: 1
        }

        dispatch(thunkCreateProduct(data))
        .then((res) => {dispatch(thunkAddToCart(res.id, sessionUser.id, order))})
        .then(()=> {history.push('/bag')})
    }

    return (
        <>
            <div>
                <h1>{item.name}</h1>
                <img src={item.image}/>
                <div>{item.price}</div>
                <button onClick={()=> setStorage(256)}>256 GB</button>
                <button onClick={()=> setStorage(512)}>512GB</button>
                <button onClick={()=> setColor('red')}>red</button>
                <button onClick={()=> setColor('blue')}>blue</button>
                <button onClick={()=> setColor('purple')}>purple</button>

                {sessionUser && <button onClick={handleSubmit}>Add To Cart</button>}

            </div>

            <div>
                <Reviews itemId={itemId} />
            </div>
        </>
    )

}


export default CreateProduct;
