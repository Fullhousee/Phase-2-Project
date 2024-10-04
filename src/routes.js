import ErrorPage from "./pages/ErrorPage";
import App from "./App.js"
import JokeList from "./pages/JokeList.js";
import Joke from "./pages/Joke.js";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/jokelist",
    element: <JokeList />,
    errorElement: <ErrorPage />
  },
  {
    path: "/joke",
    element: <Joke/>,
    errorElement: <ErrorPage />
  },
  // {
  //   path: "/joke/:id",
  //   element: <Joke />,
  //   errorElement: <ErrorPage />
  // }
  ];

export default routes;