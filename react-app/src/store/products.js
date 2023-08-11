
const CREATE_PRODUCT = 'product/CREATE_PRODUCT'
const GET_ITEM = 'item/GET_ITEM'


const createProduct = (data) => ({
    type: CREATE_PRODUCT,
    data
})

const getItem = (item) => ({
    type: GET_ITEM,
    item
})




export const thunkCreateProduct = (data) => async (dispatch) => {
    const response = await fetch(`/api/product/new`, {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
    if (response.ok)    {
        const result = await response.json()
        dispatch(createProduct(result))
        return result
    }
    else if (response.status < 500){
    const err = await response.json()
    return err
}
}



export const thunkGetSingleItem = (itemid) => async(dispatch) => {
    const res = await fetch(`/api/product/item/${itemid}`)

    if(res.ok){
        const response = await res.json()
        console.log(response)
        dispatch(getItem(response))
        return response
    }
    else if (res.status < 500){
        const err = await res.json()
        return err
    }
}


let initialState = {singleItem: {}, product: {}}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_PRODUCT : {
            const newState = {...state}
            newState.product[action.data.id] = action.data
            return newState
        }
        case GET_ITEM: {
            let newState = {...state, singleItem:{...state.singleItem}}
            // console.log('newState', newState)
            newState.singleItem=action.item
            return newState
        }

        default:
            return state
    }
}
