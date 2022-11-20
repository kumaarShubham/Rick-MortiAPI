import {useState, useEffect} from 'react';
import './style.css';

function Character({character}) {
  const [dimension, setDimension] = useState('');
  const [residents, setResidents] = useState('');
  const [episodes, setEpisodes] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(character.location.url);
      const data = await response.json();
      setDimension(data.dimension);
      setResidents('' + data.residents.length);

      const eps = character.episode;

      for (let i = 0; i < eps.length; i++) {
        const response2 = await fetch(eps[i]);
        const data2 = await response2.json();
        setEpisodes((prev) => prev + data2.name + ' ');
      }
    }
    fetchData();
  }, []);

  return (
    <div className="text-center d-5 border" key={character.id}>
      <br />
      <h2>{character.name}</h2>
      <img className="img-fluid rounded border border-4 border-info" src={character.image} alt={character.name} />
      <p>Origin: {character.origin.name}</p>
      <p>Gender: {character.gender}</p>
      <p>Species: {character.species}</p>
      <p>Current Location: {character.location.name}</p>
      <p>Dimension: {dimension}</p>
      <p>Residents: {residents}</p>
      <p>Episodes: {episodes}</p>
    </div>
  );
}

export default Character;
