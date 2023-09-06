
const ADD_TO_SAVES = 'saves/ADD_TO_SAVES'
const GET_ALL_SAVED = 'saves/GET_ALL_SAVED'
const DELETE_SAVED_ITEM = 'saves/DELETE_SAVED'



const addToSaveLater = (data) => ({
    type: ADD_TO_SAVES,
    data
})


const getAllSavedItems = (data) => ({
    type: GET_ALL_SAVED,
    data
})


const deleteSavedItem = (id) => ({
    type: DELETE_SAVED_ITEM,
    id
})





//this thunk will remove the item from the saved list but not delete the product
export const thunkRemoveSavedItem = (savedId) => async(dispatch) => {
    const res = await fetch(`/api/save/remove_from_saved/${savedId}`, {
        method:'DELETE'
    })
    if (res.ok)    {
        const data = await res.json()
        dispatch(deleteSavedItem(savedId))
        return data
    }else {
            const err = await res.json()
            return {errors:err}
        }
}





export const thunkDeleteSavedItem = (savedId) => async(dispatch) => {
    const res = await fetch(`/api/save/delete/${savedId}`, {
        method:'DELETE'
    })
    if (res.ok)    {
        const data = await res.json()
        dispatch(deleteSavedItem(savedId))
        return data
    }else {
            const err = await res.json()
            return {errors:err}
        }
}





export const thunkGetUsersSavedItems = (userId) => async(dispatch) => {
    const res = await fetch(`/api/save/get_saved/${userId}`)

    if(res.ok){
        const response = await res.json()
        console.log(response, 'response from thunk for getting saves')
        dispatch(getAllSavedItems(response))
        return response
    }
    else if (res.status < 500){
        const err = await res.json()
        console.log(err, 'err in get saves thunk')
        return err
    }

}





export const thunkAddToSaveLater = (productId, userId) => async(dispatch) => {
    const res = await fetch(`/api/save/save_item/${productId}/${userId}`, {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({user_id: userId, product_id: productId})
    })

    if(res.ok){
        const response = await res.json()
        console.log(response, 'response from thunk for save later')
        dispatch(addToSaveLater(response))
        return response
    }
    else if (res.status < 500){
        const err = await res.json()
        console.log(err, 'err in adding saves thunk')
        return err
    }
}




let initialState = {allSaves: {}, save: {}}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_SAVED: {
            let newState = {...state, allSaves:{...state.allSaves}}
            newState.allSaves = {}
            action.data.forEach(ele => {
                newState.allSaves[ele.id]= ele
            });
            return {...newState}
        }
        case ADD_TO_SAVES: {
            const newState = {...state}
            newState.save[action.data.id] = action.data
            return newState
        }
        case DELETE_SAVED_ITEM: {
            const newState = {...state, allSaves:{...state.allSaves}}
            delete newState.allSaves[action.id]
            return newState
        }
        default:
            return state
    }
}
