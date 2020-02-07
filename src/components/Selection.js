import React from 'react';

const Selection = (props) => {

    return(
        <div>
            <button onClick={props.click} value="people/">People</button>
            <button onClick={props.click} value="25">Planets</button>
            <button onClick={props.click} value="25">Spaceships</button>
            <button onClick={props.click} value="25">Vehicles</button>
        </div>
    );
};

export default Selection;