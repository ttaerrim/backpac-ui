import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Card direction='column' label='Card Label' title='Card Title' star={3} />
      <Card direction='column' label='Card Label 2' title='Card Title 2' star={4} />
    </div>
  );
}

export default App;
