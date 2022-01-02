import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const Chart = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const data = useSelector((state) => state.totals);

    useEffect(() => {
        async function getTotals() {
            let response = await axios.get('https://api.covidtracking.com/v1/us/current.json');
            dispatch({
                type: "UPDATE_TOTALS",
                payload: response.data[0]
            });
            setLoading(false);   
        }
        getTotals();
    });


    const RenderBar = () => {

        const chartData = {
            labels: ['Total Positive', 'Daily Postitives', 'Total Death', 'Currently Hospitalized', 'Total Hospitalized'],
            datasets: [
              {
                label: 'Number of People',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [data.totals.positive, data.totals.positiveIncrease, data.totals.death, data.totals.hospitalizedCurrently, data.totals.hospitalized]
              }
            ]
        };

        return (
            <Bar
            data={chartData}
            width={500}
            height={400}
            options={{
                maintainAspectRatio: true
            }}
          />
        )
    }

    return (
        <div>
            {loading ? <div>loading..</div> : <RenderBar/>}
        </div>
    )
}

export default Chart
