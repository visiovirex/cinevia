import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch("https://api.tvmaze.com/shows");
      const data = await res.json();

      setMovies(data);
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      const fetchMovies = async () => {
        const res = await fetch("https://api.tvmaze.com/shows");
        const data = await res.json();

        setMovies(data);
      };

      fetchMovies();
      return;
    }

    const searchMovies = async () => {
      const res = await fetch(
        `https://api.tvmaze.com/search/shows?q=${search}`,
      );

      const data = await res.json();

      const searchResults = data.map((item) => item.show);

      setMovies(searchResults);
    };

    searchMovies();
  }, [search]);

  const handleSeeDetails = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Explore Movies
        </h1>

        <p className="text-gray-600">
          Search and discover your favorite movies and shows.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-10">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for a movie..."
            className="w-full rounded-xl border border-gray-300 bg-white py-4 pl-12 pr-4 text-gray-900 outline-none transition focus:border-gray-500"
          />
        </div>
      </div>

      {/* Movie Grid */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          {search ? "Search Results" : "All Movies"}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSeeDetails={handleSeeDetails}
            />
          ))}
        </div>
      </section>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-200 p-4">
              <h2 className="text-xl font-bold text-gray-900">Movie Details</h2>

              <button
                onClick={handleCloseModal}
                className="text-2xl text-gray-500 transition hover:text-gray-900"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Movie Image */}
            <div className="aspect-video overflow-hidden bg-gray-100">
              {selectedMovie.image?.original || selectedMovie.image?.medium ? (
                <img
                  src={
                    selectedMovie.image?.original || selectedMovie.image?.medium
                  }
                  alt={selectedMovie.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-400">
                  No Image Available
                </div>
              )}
            </div>

            {/* Movie Information */}
            <div className="p-6">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                {selectedMovie.name}
              </h2>

              <div className="mb-6 flex flex-wrap gap-4 text-sm text-gray-600">
                <span>⭐ Rating: {selectedMovie.rating?.average || "N/A"}</span>

                <span>📅 Release: {selectedMovie.premiered || "N/A"}</span>
              </div>

              {/* Genres */}
              {selectedMovie.genres?.length > 0 && (
                <div className="mb-6">
                  <h3 className="mb-2 font-semibold text-gray-900">Genres</h3>

                  <div className="flex flex-wrap gap-2">
                    {selectedMovie.genres.map((genre) => (
                      <span
                        key={genre}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary */}
              <div className="mb-6">
                <h3 className="mb-2 font-semibold text-gray-900">Overview</h3>

                <div
                  className="leading-7 text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: selectedMovie.summary || "No summary available.",
                  }}
                />
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="rounded-lg bg-gray-900 px-5 py-2.5 font-semibold text-white transition hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies;
