export function handleSelectMovie(id, setSelected) {
  setSelected(id);
}

export function handleCloseMovie(setSelected) {
  setSelected(null);
}

export function handleAddWatched(movie, setWatched) {
  setWatched((watched) => [...watched, movie]);
}

export function handleDeleteWatched(id, setWatched) {
  setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
}
