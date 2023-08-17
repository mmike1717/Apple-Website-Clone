
const CREATE_ORDER = 'order/CREATE_ORDER'
const GET_ALL_ORDERS = 'order/GET_ALL_ORDERS'
const EDIT_QUANTITY = 'order/EDIT_QUANTITY'
const DELETE_ORDER = 'order/DELETE_ORDER'
const DELETE_CART = 'order/DELETE_CART'


const deleteAllCart = () => ({
    type: DELETE_CART,
})

const deleteAOrder = (id) => ({
    type: DELETE_ORDER,
    id
})


const editOrdersQuantity = (data) => ({
    type: EDIT_QUANTITY,
    data
})


const getOrderForCart = (data) => ({
    type: GET_ALL_ORDERS,
    data
})

const createOrders = (data) => ({
    type: CREATE_ORDER,
    data
})




export const thunkDeleteAllOrdersFromCart = (userId) => async(dispatch) => {
    const res = await fetch(`/api/orders/delete/cart/${userId}`, {
        method: 'DELETE'
    })
    if(res.ok){
        const data = await res.json()
        dispatch(deleteAllCart())
        return data
    } else {
        const err = await res.json()
        return {errors:err}
    }
}


export const thunkDeleteAOrder = (orderId) => async(dispatch) => {
    const res = await fetch(`/api/orders/delete/${orderId}`, {
        method:'DELETE'
    })
    if (res.ok)    {
        const data = await res.json()
        dispatch(deleteAOrder(orderId))
        return data
    }else {
            const err = await res.json()
            return {errors:err}
        }
}


export const thunkEditOrdersQuantity = (id, quantity) => async(dispatch) => {
    const res = await fetch(`/api/orders/edit/${id}`, {
        method:'PUT',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({quantity})
    })

    if (res.ok)    {
        const result = await res.json()
        dispatch(editOrdersQuantity(result))
        return result
    }
    else if (res.status < 500){
    const err = await res.json()
    return err
}
}



export const thunkGetOrdersForCart = (userId) => async(dispatch) => {
    const res = await fetch(`/api/orders/in_cart/${userId}`)

    if(res.ok){
        const response = await res.json()
        dispatch(getOrderForCart(response))
        return response
    }
    else if (res.status < 500){
        const err = await res.json()
        return err
    }

}



export const thunkAddToCart = (productId, userId, data) => async(dispatch) => {
    const res = await fetch(`/api/orders/add_order/${productId}/${userId}`, {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })

    if(res.ok){
        const response = await res.json()
        dispatch(createOrders(response))
        return response
    }
    else if (res.status < 500){
        const err = await res.json()
        return err
    }
}





let initialState = {cart: {}, newToCart: {}}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ORDERS: {
            let newState = {...state, cart:{...state.cart}}
            newState.cart = {}
            action.data.forEach(ele => {
                newState.cart[ele.id]= ele
            });
            return {...newState}
        }

        case CREATE_ORDER : {
            const newState = {...state}
            newState.cart[action.data.id] = action.data
            return newState
        }

        case EDIT_QUANTITY : {
            const newState = {...state, cart:{...state.cart},newToCart:{...state.newToCart}}
            newState.cart = action.data
            return newState
        }

        case DELETE_ORDER: {
            const newState = {...state, cart:{...state.cart}}
            delete newState.cart[action.id]
            return newState
        }

        case DELETE_CART: {
            const newState = {...state, cart: {}, newToCart: {}}
            return newState
        }

        default:
            return state
    }
}
