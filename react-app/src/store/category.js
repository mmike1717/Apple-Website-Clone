
const GET_ALL_CATEGORY = 'category/GET_ALL'


const getAllCategory = (data) => ({
    type:GET_ALL_CATEGORY,
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




let initialState = { allCategory: {} }
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
        default:
            return state
    }
}
