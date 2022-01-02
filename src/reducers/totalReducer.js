
const totalReducer = (state = { totals: { positiveIncrease: 0, hospitalizedCurrently: 0, positive: 0 }}, action) => {
    
    const { type, payload } = action;

    switch(type) {
        case "UPDATE_TOTALS":
            let copy = state;
            copy.totals = payload;
            return copy;       
        default: 
            return state;
    }
}

export default totalReducer;