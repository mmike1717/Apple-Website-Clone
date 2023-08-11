

const CREATE_REVIEW = 'review/CREATE_REVIEW'
const GET_ALL_REVIEWS = 'review/GET_ALL_REVIEWS'
const EDIT_REVIEW = 'review/EDIT_REVIEW'
const DELETE_REVIEW = 'review/DELETE_REVIEW'


const deleteReview = (id) => ({
    type: DELETE_REVIEW,
    id
})


const editAReview = (data) => ({
    type: EDIT_REVIEW,
    data
})


const getAllReviews = (data) => ({
    type: GET_ALL_REVIEWS,
    data
})

const createReview = (data) => ({
    type: CREATE_REVIEW,
    data
})



export const thunkDeleteAReview = (reviewId) => async(dispatch) => {
    const res = await fetch(`/api/reviews/delete/${reviewId}`, {
        method:'DELETE'
    })
    if (res.ok)    {
        const data = await res.json()
        dispatch(deleteReview(reviewId))
        return data
    }else {
            const err = await res.json()
            return {errors:err}
        }
}


export const thunkEditAReview = (reviewId, data) => async(dispatch) => {
    const res = await fetch(`/api/reviews/edit/${reviewId}`, {
        method:'PUT',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })

    if (res.ok)    {
        const result = await res.json()
        dispatch(editAReview(result))
        return result
    }
    else if (res.status < 500){
    const err = await res.json()
    return err
}
}



export const thunkGetAllReview = (itemId) => async(dispatch) => {
    const res = await fetch(`/api/reviews/get_reviews/${itemId}`)

    if(res.ok){
        const response = await res.json()
        console.log(response)
        dispatch(getAllReviews(response))
        return response
    }
    else if (res.status < 500){
        const err = await res.json()
        return err
    }

}



export const thunkCreateAReview = (data) => async(dispatch) => {
    const res = await fetch(`/api/reviews/new_review`, {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })

    if(res.ok){
        const response = await res.json()
        dispatch(createReview(response))
        return response
    }
    else if (res.status < 500){
        const err = await res.json()
        return err
    }
}



let initialState = {allReviews: {}, singleReview: {}}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_REVIEWS: {
            let newState = {...state, allReviews:{...state.allReviews}}
            newState.allReviews = {}
            action.data.forEach(ele => {
                newState.allReviews[ele.id]= ele
            });
            return {...newState}
        }

        case CREATE_REVIEW : {
            const newState = {...state}
            newState.allReviews[action.data.id] = action.data
            return newState
        }

        case EDIT_REVIEW : {
            const newState = {...state, allReviews:{...state.allReviews}, singleReview:{...state.singleReview}}
            newState.allReviews = action.data
            return newState
        }

        case DELETE_REVIEW: {
            const newState = {...state, allReviews:{...state.allReviews}}
            delete newState.allReviews[action.id]
            return newState
        }

        default:
            return state
    }
}
