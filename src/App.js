import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MovieList from "./components/MovieList/MovieList";
import Search from "./components/Search/Search";
import { fetchAsyncMovies} from './features/movies/movieSlice';


function App() {
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch])
  
  return (
    <div className="App">
      <Header />
      <Hero />
      <Search />
      <MovieList/>
    </div>
  );
}

export default App;
