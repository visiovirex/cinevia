import { Link } from "react-router";
import HeroImage from "../assets/hero.jpg";

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section
        className="relative min-h-125 overflow-hidden rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-125 items-center justify-center px-4 text-center text-white">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-300">
              Discover Movies
            </p>

            <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
              Explore Movies You’ll Love
            </h1>

            <p className="mb-8 text-base leading-7 text-gray-200 sm:text-lg">
              Explore and discover your favorite movies from around the world.
              Find new stories, exciting characters, and movies worth watching.
            </p>

            <button className="cursor-pointer rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-200">
             <Link to="/movies" >Explore Now</Link> 
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;