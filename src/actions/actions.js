export const addFeature = () => {
    return {type: "ADD_FEATURE"}
}
export const removeFeature = (id) => {
    return {type: "REMOVE_FEATURE", payload: id}
}
