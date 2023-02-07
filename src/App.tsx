import './App.css';
import React, { useState, useEffect } from 'react';
import { SWCharacter } from './sw_character';
import CharacterContainer from './components/character_container';

const App : React.FC = () => {

  const [characters, setCharacters] = useState<SWCharacter[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getPeople = async () => {
    const apiResponse = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`);
    const json = await apiResponse.json() as { results: SWCharacter[] };
    setCharacters(json.results);
  }

  useEffect(() => {
    getPeople();
  }, [currentPage]);

  return (
    <div className="App">
      <CharacterContainer characters={characters}/>
    </div>
  );
}

export default App;
