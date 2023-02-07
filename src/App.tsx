import './App.css';
import React, { useState, useEffect } from 'react';
import { SWCharacter } from './sw_character';
import CharacterContainer from './components/character_container';
import Header from './components/header';

const App : React.FC = () => {

  const [responseStatus, setResponseStatus] = useState<number>(0);
  const [characters, setCharacters] = useState<SWCharacter[]>([]);
  // setCurrentPage not currently used as only ever uses first page of results. Added simply in case of future use.
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getPeople = async (pageNumber : number) => {
    const apiResponse = await fetch(`https://swapi.dev/api/people/?page=${pageNumber}`);
    const json = await apiResponse.json() as { results: SWCharacter[] };
    setCharacters(json.results);
    setResponseStatus(apiResponse.status);
  }

  useEffect(() => {
    getPeople(currentPage);
  }, [currentPage]);

  return (
    <div className="App">
      <Header responseStatus={responseStatus}/>
      <CharacterContainer characters={characters}/>
    </div>
  );
}

export default App;
