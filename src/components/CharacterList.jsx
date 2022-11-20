import {useEffect, useState} from 'react';
import Character from './Character';

function NavPage(props) { // Create a NavPage component with props
  return (
    <header className='d-flex justify-content-between align-items-center'> {}
      <p>Page: {props.page}</p>
      <button className='btn btn-primary' onClick={() => props.setPage(props.page + 1)}> {/* When the button is clicked, the setPage function is executed and the value of the page + 1 is passed to it. */}
				Page {props.page + 1} {/* show page + 1 */}
      </button>
    </header>
  );
}

function CharacterList() {
  const [character, setCharacter] = useState([]); // Creates an empty array and stores it in the character state and updates it with setCharacter.
  const [loading, setLoading] = useState(true); // Create a loading state and update it with setLoading.
  const [page, setPage] = useState(1); // Create a page state and update it with the setPage.

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`); // changing ' to ` --- `${page}` is a variable interpolation. It can be used to concatenate strings.
      const data = await response.json();
      setLoading(false);
      setCharacter(data.results); // Update the character state with the data.results array
    }

    fetchData();
  }, [page]); // Function that is executed when mounting the component. It can also be used to update the component when the state changes.
  return (
    <div className="container">  {/* Create a div with the container class and the chosen background */}

      <NavPage page={page} setPage={setPage}/> {/* Import the NavPage component */}

      {loading ? ( // If the loading state is true, it displays the following code:
				<h1>Loading...</h1>
			) : ( // If the loading state is false, it displays the following code:
				<div className="row"> {/* Create a div with the row class */}
				  {character.map((character) => { // Loop through the character array and display it on the screen.
				    return (
				      <div className="col-md-4" key={character.id}>
				        <Character character={character} />
				      </div>
				    );
				  })}
				</div>
			)}
      <NavPage page={page} setPage={setPage}/>
    </div>
  );
}

export default CharacterList;
