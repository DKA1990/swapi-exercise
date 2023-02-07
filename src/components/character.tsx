import React from "react";
import { SWCharacter } from "../sw_character";

interface CharacterProps {
    character: SWCharacter;
}

const Character : React.FC<CharacterProps> = ({ character }) => {

    return (
        <div className="character">
            <h2 className="character__heading">Name: {character.name}</h2>
            <p className="character__text">Birth Year: {character.birth_year}</p>
            <p className="character__text">Gender: {character.gender}</p>
            <p className="character__text">Eye Colour: {character.eye_color}</p>
            <p className="character__text">Hair Colour: {character.hair_color}</p>
            <p className="character__text">Height: {character.height}</p>
            <p className="character__text">Mass: {character.mass}</p>
        </div>
    )
}

export default Character;