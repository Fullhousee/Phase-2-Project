import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [data, setData] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, [])

  const movieList = data.map(data =>{
    return <MovieCard key={data.id} title={data}/>
  });


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {movieList}
      </main>
    </>
  );
};

export default Home;
