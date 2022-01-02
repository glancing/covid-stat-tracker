
const stateTotalReducer = (state = { totals: []}, action) => {
    
    const { type, payload } = action;

    switch(type) {
        case "UPDATE_STATE_TOTALS":
            let copy = state;
            copy.stateTotals = payload;
            return copy; 
        case "SET_CURRENT_STATE":
            let copy1 = state;
            copy1.currentState = payload;
            return copy1; 
        default: 
            return state;
    }
}

export default stateTotalReducer;