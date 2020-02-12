import React from 'react';
import Card from './Card';

const CardList = (props) => {


    const cardSelector = (choice) => {
        switch (choice) {
            case 'people/':
                return(
                    props.data.results.map( ( character,i) => {
                        return(
                            <Card
                            key={i}
                            card={choice}
                            name={character.name}
                            bday={character.bday}
                            gender={character.gender}
                             />
                        );
                    } )
                );
            case 'planets/':
                return(
                    props.data.results.map( ( planet,i) => {
                        return(
                            <Card
                            key={i}
                            card={choice}
                            name={planet.name}
                            diameter={planet.diameter}
                            population={planet.population}
                             />
                        );
                    } )
                );
            case 'starships/':
                return(
                    props.data.results.map( (starship,i) => {
                        return(
                            <Card
                            key={i}
                            card={choice}
                            name={starship.name}
                            model={starship.model}
                            hyperdrive_rating={starship.hyperdrive_rating}
                             />
                        );
                    } )
                );
            case 'vehicles/':
                return(
                    props.data.results.map( ( vehicle,i) => {
                        return(
                            <Card
                            key={i}
                            card={choice}
                            name={vehicle.name}
                            model={vehicle.model}
                            manufacturer={vehicle.manufacturer}
                             />
                        );
                    } )
                );
            default:
                break;
        }
    }

    return(
        <div>
            {
                cardSelector(props.selection)
            }
        </div>
    )
}

export default CardList;