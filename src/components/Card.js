import React from 'react';

const Card = (props) => {

    const cardSel = (sel) => {
        console.log(sel);
        switch (sel) {
            case 'people/':
                return(
                    <div>
                        <h1>{props.name}</h1>
                        <h3>{props.bday}</h3>
                        <h3>{props.gender}</h3>
                    </div>
                );
            case 'planets/':
                return(
                    <div>
                        <h1>{props.name}</h1>
                        <h3>{props.diameter}</h3>
                        <h3>{props.population}</h3>
                    </div>
                );
            case 'spaceships/':
                return(
                    <div>
                        <h1>{props.name}</h1>
                        <h3>{props.diameter}</h3>
                        <h3>{props.population}</h3>
                    </div>
                );
            case 'vehicles/':
                return(
                    <div>
                        <h1>{props.name}</h1>
                        <h3>{props.diameter}</h3>
                        <h3>{props.population}</h3>
                    </div>
                );
            default:
                break;
        }
    }

    return (
        <div className="tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            {
                cardSel(props.card)
            }
        </div>
    )
}

export default Card;