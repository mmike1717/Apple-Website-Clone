
const CREATE_PROFILE = 'profile/CREATE_PROFILE'


const createProfile = (data) => ({
    type: CREATE_PROFILE,
    data
})



export const thunkCreateProfileInfo = (data) => async (dispatch) => {
    const response = await fetch(`/api/product/new`, {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
    if (response.ok)    {
        const result = await response.json()
        dispatch(createProfile(result))
        return result
    }
    else if (response.status < 500){
    const err = await response.json()
    return err
}
}



let initialState = {profile: {}}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_PROFILE : {
            const newState = {...state}
            newState.profile[action.data.id] = action.data
            return newState
        }

        default:
            return state
    }
}
