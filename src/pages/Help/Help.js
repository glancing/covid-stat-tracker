import React from 'react';

const Help = () => {
    return (
        <div className="help-page">
            <h1>Frequently Asked Questions</h1>
            <div className="faq">
                <div className="question">
                    <h2>1. Where do we get our data?</h2>
                    <p>We use an api from The Covid Tracking Project to obtain our data.</p>
                </div>
                <div className="question">
                    <h2>2. How do I see the total postive cases?</h2>
                    <p>Navigate to the red navigation bar on the left side and click on the image that look like a bar graph.</p>
                </div>
                <div className="question">
                    <h2>3. How do I check the stats for my state?</h2>
                    <p>Locate the heartbeat icon on the navigation bar.</p>
                    <p>Click on the state abbreviation for which you want to data for</p>
                </div>
                <div className="question">
                    <h2>4. Why are stats missing?</h2>
                    <p>Some states don't report all of their stats</p>
                    <p>The api can also be missing collected stats as well</p>
                </div>
            </div>
        </div>
        
    )
}

export default Help
