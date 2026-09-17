import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-gray-950 text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          🎬 Cinevia
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="rounded-lg bg-white px-4 py-2 font-semibold text-gray-900 transition hover:bg-gray-200"
          >
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;