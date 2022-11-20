import Character from './components/Character';
import CharacterList from './components/CharacterList';

function app() {
  return (
    <div className="bg-light text-black">
      <h1 className="text-center display-1 py-4">Rick and Morty</h1>
      <CharacterList/>
    </div>
  );
};

export default app;
