import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
        <h2>{title.title}</h2>
        <p>
          <Link to={`/movie/${title.id}`}>View profile</Link>
        </p>
    </article>
  );
};

export default MovieCard;