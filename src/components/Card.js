import React from 'react';

const Card = (props) => {

    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.bday}</h1>
            <h1>{props.eyecolor}</h1>
            <h1>{props.gender}</h1>
            <h1>{props.haircolor}</h1>
            <h1>{props.height}</h1>
        </div>
    )
}

export default Card;