import {useState, useEffect} from "react";
import {NavBar, Search, NumResults} from "./NavBar";
import Box from "./Box";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import WatchedMoviesList from "./WatchedMoviesList";
import Loader from "./Loader";
import WatchedSummary from "./WatchedSummary";
import ErrorMessage from "./ErrorMessage";
import {useMovies} from "./useMovies";
import {useLocalStorageState} from "./useLocalStorageState";
import {useKey} from "./useKey";

export default function App() {
  const KEY = "ec218233";

  const [query, setQuery] = useState("");
  const [watched, setWatched] = useLocalStorageState([], "watched");

  const {movies, isLoading, error} = useMovies(query);
  const [selectedId, setSelected] = useState("");

  function handleSelectMovie(id) {
    setSelected(id);
  }

  function handleCloseMovie() {
    setSelected(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
              keyId={KEY}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeletedWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function Main({children}) {
  return <main className="main">{children}</main>;
}
