import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
  {/* Image on top */}
  <img
    src="/assets/404.svg" // Note: public folder files are referenced from root /
    alt="404 Not Found"
    className="w-40 h-30 mb-8 object-contain"

  />

  {/* Text content */}
  <div className="text-center">
    <h1 className="text-5xl font-extrabold mb-4 text-gray-800">404</h1>
    <p className="text-xl text-gray-500 mb-6">Oops! Page not found</p>
    <a
      href="/"
     className="inline-block px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
    >
      Return to Home
    </a>
  </div>
</div>
  );
};

export default NotFound;
