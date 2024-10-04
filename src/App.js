import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  // const [data, setData] = useState([])

  // useEffect(() =>{
  //   fetch("http://localhost:4000/jokes")
  //     .then(r => r.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error(error))
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React...ionary Dad Jokes
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
