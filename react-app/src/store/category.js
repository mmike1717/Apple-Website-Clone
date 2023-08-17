
const GET_ALL_CATEGORY = 'category/GET_ALL'
const GET_ALL_STORE_ITEMS = 'store/ALL_ITEMS'

const getAllCategory = (data) => ({
    type:GET_ALL_CATEGORY,
    data
})


const getAllStoreItems = (data) => ({
    type:GET_ALL_STORE_ITEMS,
    data
})



export const thunkGetAllCategory = () => async(dispatch) => {
    const res = await fetch(`/api/category/get_all`)

    if(res.ok){
        const response = await res.json()
        dispatch(getAllCategory(response))
        return response
    }
    else if (res.status < 500){
        const err = await res.json()
        return err
    }

}




export const thunkGetAllStoreItems = () => async(dispatch) => {
    const res = await fetch(`/api/category/store/all_items`)

    if(res.ok){
        const response = await res.json()
        dispatch(getAllStoreItems(response))
        return response
    }
    else if (res.status < 500){
        const err = await res.json()
        return err
    }

}





let initialState = { allCategory: {}, storeItems: {} }
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CATEGORY: {
            let newState = {...state, allCategory:{...state.allCategory}}
            newState.allCategory = {}
            action.data.forEach(ele => {
                newState.allCategory[ele.id]= ele
            });
            return {...newState}
        }

        case GET_ALL_STORE_ITEMS: {
            let newState = {...state, storeItems:{...state.storeItems}}
            newState.storeItems = {}
            action.data.forEach(ele => {
                newState.storeItems[ele.id]= ele
            });
            return {...newState}
        }

        default:
            return state
    }
}
