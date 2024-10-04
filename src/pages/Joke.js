import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Joke(){
    const [jokes, setJokes] = useState([])
    const params = useParams();
    const jokeId = params.id;

    useEffect(() => {
        fetch("http://localhost:4000/jokes")
          .then((r) => r.json())
          .then((joke) => setJokes(joke));
      }, [jokeId]);

      

      const randomJokeIdx = Math.floor(Math.random() * jokes.length);
      const randomJoke = jokes[randomJokeIdx]
      console.log(randomJoke)

      return (
        <main>
            <header>
                <NavBar />
            </header>
            {/* <h3>{randomJoke.joke}</h3> */}
            <h3>icanhazdadjoke.com is the largest selection of dad jokes on the internet.<br />
                Now supporting many different integrations to ensure you can access the dad jokes that you need wherever you are.</h3>
        </main>
      )




}

export default Joke;