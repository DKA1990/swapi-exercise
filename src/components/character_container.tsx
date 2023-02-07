import React from 'react';
import { SWCharacter } from '../sw_character';
import Character from './character';

interface CharacterContainerProps {
    characters: SWCharacter[];
}

const CharacterContainer : React.FC<CharacterContainerProps> = ( { characters }) => {

    const createCharArray = () => {
        let charArr : Array<JSX.Element> = [];

        characters.forEach((char, index) => {
            charArr.push(<Character key={index} character={char}/>)
        });
        return charArr;
    }

    return (
        <div className='character-container'>
            {createCharArray()}
        </div>
    )
}

export default CharacterContainer;