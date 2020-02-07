import React from 'react';
import Card from './Card';

const CardList = (props) => {

    return(
        <div>
            {props.data.results.map( ( character,i) => {
                return(
                    <Card
                    key={i}
                    name={character.name}
                    bday={character.bday}
                    eyecolor={character.eyecolor}
                    gender={character.gender}
                    haircolor={character.haircolor}
                    height={character.height}
                     />
                );
            } )}
        </div>
    )
}

export default CardList;