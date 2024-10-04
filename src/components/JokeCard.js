import {Link} from 'react-router-dom';

function JokeCard({joke}) {
  
  return (
    <article>
        <h2>{joke.id}</h2>
        <p>
          {joke.joke}
        </p>
    </article>
  );
};

export default JokeCard;