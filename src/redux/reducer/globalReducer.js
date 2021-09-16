import globalActionType from "./globalActionType";

const globalState = {
    data: []
}

const globalReducer = (state = globalState, action) => {
    switch (action.type) {
        case globalActionType.ADD_DATA:
            return {
                data: action.payload
            }
        default:
            return state;
    }
}
export default globalReducer;