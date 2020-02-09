import React from 'react';

const Selection = (props) => {

    return(
        <div className="ml7 mv4 pa5 ">
            <button className="ma2 f6 link dim ba b--yellow br3 ph3 pv2 mb2 dib yellow bg-black" onClick={props.click} value="people/">People</button>
            <button className="ma2 f6 link dim ba b--yellow br3 ph3 pv2 mb2 dib yellow bg-black" onClick={props.click} value="planets/">Planets</button>
            <button className="ma2 f6 link dim ba b--yellow br3 ph3 pv2 mb2 dib yellow bg-black" onClick={props.click} value="spaceships/">Spaceships</button>
            <button className="ma2 f6 link dim ba b--yellow br3 ph3 pv2 mb2 dib yellow bg-black" onClick={props.click} value="vehicles/">Vehicles</button>
        </div>
    );
};

export default Selection;