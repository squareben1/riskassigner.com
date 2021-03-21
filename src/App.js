import './styles/App.css';
import Header from './components/Header'
import PlayerInput from './components/PlayerInput'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <PlayerInput />
      </header>
    </div>
  );
}

export default App;
