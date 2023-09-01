
const CREATE_PROFILE = 'profile/CREATE_PROFILE'
const EDIT_PROFILE = 'profile/GET_PROFILE'


const createProfile = (data) => ({
    type: CREATE_PROFILE,
    data
})

const editProfile= (data) => ({
    type: EDIT_PROFILE,
    data
})


export const thunkEditProfile = (profileId, formData) => async(dispatch) => {
    const res = await fetch(`/api/profile/edit/${profileId}`,{
        method:'PUT',
        // headers:{"Content-Type":"application/json"},
        body: formData
    })
    if (res.ok)    {
        const result = await res.json()
        dispatch(createProfile(result))
        return result
    }
    else if (res.status < 500){
    const err = await res.json()
    return err
}
}



export const thunkGetUserProfile = (userId) => async(dispatch) => {
    const res = await fetch(`/api/profile/get_profile/${userId}`)

    if (res.ok)    {
        const result = await res.json()
        dispatch(createProfile(result))
        return result
    }
    else if (res.status < 500){
    const err = await res.json()
    return err
}
}




export const thunkCreateProfileInfo = (formData) => async (dispatch) => {
    const response = await fetch(`/api/profile/new`, {
        method:'POST',
        body: formData
    })
    if (response.ok)    {
        const result = await response.json()
        dispatch(createProfile(result))
        return result
    }
    else if (response.status < 500){
    console.log('therer was an error in thunk')
    const err = await response.json()
    return err
}
}



let initialState = {profile: {}}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_PROFILE : {
            const newState = {...state}
            console.log(action.data)
            newState.profile[action.data.id] = action.data
            return newState
        }

        default:
            return state
    }
}
