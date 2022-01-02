import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

const StateRows = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const data = useSelector((state) => state.stateTotals);

    useEffect(() => {
        async function getTotals() {
            let response = await axios.get('https://api.covidtracking.com/v1/states/current.json');
            dispatch({
                type: "UPDATE_STATE_TOTALS",
                payload: response.data
            });
            setLoading(false);   
        }
        getTotals();
    }, [dispatch]);

    const clickState = (state) => {
        dispatch({
            type: "SET_CURRENT_STATE",
            payload: state
        });
        history.push(`/state/${state}`);
    }

    const RenderStates = () => {

        let rowsHtml = [];
        let groupsHtml = [];

        for(let i = 0, j = 1; i < data.stateTotals.length; i++){
            groupsHtml.push(<div key={i} onClick={(e) => clickState(data.stateTotals[i].state)} className="state-entry">{data.stateTotals[i].state}</div>);
            if(j % 4 === 0) {
                rowsHtml.push(<div key={'row' + i + j} className="state-row">{groupsHtml}</div>);
                groupsHtml = [];
            } else {
                if(i === data.stateTotals - 1){
                    rowsHtml.push(<div key={'row' + i + j} className="state-row">{groupsHtml}</div>);
                }
            }
            j++;
        }

        return (
            <div className="state-container">
                {rowsHtml}
            </div>
        )
    }

    return (
        <div>
            {loading ? <div>loading..</div> : <RenderStates/>}
        </div>
    )
}

export default StateRows
