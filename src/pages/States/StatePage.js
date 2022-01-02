import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { returnStateName } from './utils';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const StatePage = () => {
    const { state } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((reduxState) => reduxState.stateTotals);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getTotals() {
            let response = await axios.get('https://api.covidtracking.com/v1/states/current.json');
            dispatch({
                type: "UPDATE_STATE_TOTALS",
                payload: response.data
            });
            setLoading(false);   
        }
        !data.stateTotals ? getTotals() : setLoading(false);
    }, [data.stateTotals, dispatch]);

    const LoadState = () => {

        let stateData = data.stateTotals.find(index => index.state === state);
        const chartData = {
            labels: ['Negative', 'Positive'],
            datasets: [
              {
                label: 'Number of People',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [stateData.negative, stateData.positive]
              }
            ]
        }

        return (
            <div>
                <h2>Last Update: {stateData.lastUpdateEt}</h2>
                <Bar
                data={chartData}
                width={500}
                height={400}
                options={{
                    maintainAspectRatio: true
                }}
                />
            </div>
        )
    }

    let { fullName, totalTests } = returnStateName(state, data.stateTotals);

    return (
        <div className="indiv-state-page">
            <h1>{fullName}</h1>
            <h1>Total Tests: {totalTests}</h1>
            <div className="state-graph">
                { loading ? <div>loading..</div> : <LoadState/> }
            </div>
        </div>
    )
}

export default StatePage
