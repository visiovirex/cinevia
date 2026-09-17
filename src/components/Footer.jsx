import { Link } from "react-router";

function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Application Name */}
          <Link to="/" className="text-xl font-bold">
            🎬 MovieExplorer
          </Link>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © 2026 MovieExplorer. All rights reserved.
          </p>

          {/* GitHub */}
          <a
            href="#"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;