export const addFeature = (feature) => dispatch => {
    console.log("the add function is working");
    return dispatch({type: "ADD_FEATURE", payload: feature})
}
export const removeFeature = (feature) => dispatch => {
    return dispatch({type: "REMOVE_FEATURE", payload: feature})
}
