import './App.css';
import Card from './components/Card';

const LOREM_IPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

function App() {
  return (
    <div>
      <Card direction='column' label='Card Label' title='Card Title' star={3} description={LOREM_IPSUM} />
      <Card direction='column' label='Card Label 2' title='Card Title 2' star={4} description={LOREM_IPSUM} />
    </div>
  );
}

export default App;
