import React from 'react';

const seasonConfig = {
    summer: {
        text: `Let's hit the beach!`,
        iconName: 'sun'
    },
    winter: {
        text: `Burr, it's chilly`,
        iconName: 'snowflake'
    }
};

const getSeason = (lat) => {
    let month = new Date().getMonth();
    return lat > 0  && month > 2 && month < 9? 'summer' : 'winter';
}

const SeasonDisplay = (props) => {
    const {text, iconName} = seasonConfig[getSeason(props.lat)];
    return (
        <div>
            <i className={`massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;