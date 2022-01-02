import React from 'react';
import { ReactComponent as DataSvg } from './data.svg';
import { ReactComponent as WaveSvg } from './wave.svg';

const Dash = () => {
    return (
        <div className='dashboard-page'>
            <div className='welcome'>
                <h1>Dashboard</h1>
                <h2>Welcome User</h2>
            </div>
            <DataSvg className='dataSvg'/>
            <div className='wave-wrapper'>
                <WaveSvg/>
            </div>
        </div>
    )
}

export default Dash
