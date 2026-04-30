// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;