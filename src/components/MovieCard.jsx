function MovieCard({ movie, onSeeDetails }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Poster */}
      <div className="aspect-2/3 overflow-hidden bg-gray-100">
        {movie.image?.medium ? (
          <img
            src={movie.image.medium}
            alt={movie.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Movie Information */}
      <div className="p-4">
        <h3 className="mb-2 truncate text-lg font-bold text-gray-900">
          {movie.name}
        </h3>

        <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
          <span>⭐ {movie.rating?.average || "N/A"}</span>

          <span>
            📅 {movie.premiered ? movie.premiered.slice(0, 4) : "N/A"}
          </span>
        </div>

        <button
          onClick={() => onSeeDetails(movie)}
          className="w-full rounded-lg bg-gray-900 px-4 py-2 font-semibold text-white transition hover:bg-gray-700"
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
