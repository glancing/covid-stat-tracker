import { combineReducers } from 'redux';
import totalReducer from './totalReducer';
import stateTotalReducer from './stateTotalReducer';

const rootReducer = combineReducers({
    totals: totalReducer,
    stateTotals: stateTotalReducer
});

export default rootReducer;