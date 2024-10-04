import { useEffect, useState } from "react";
import JokeCard from "../components/JokeCard";
import NavBar from "../components/NavBar";
import JokeForm from "../components/JokeForm";


function JokeList(){
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/jokes")
          .then((r) => r.json())
          .then((joke) => setJokes(joke));
      }, []);

      const jokesToDisplay = jokes

      function onAddJoke(newJoke){
        setJokes([...jokes, newJoke])
      }

      return (
        <main>
            <header>
                <NavBar />
            </header>
            <JokeForm onAddJoke={onAddJoke}/>
            <ul>
            {jokesToDisplay.map((joke) => (
          <JokeCard 
          key={joke.id}
          joke={joke}
          />
        ))}
            </ul>
        </main>
      )

}

export default JokeList;