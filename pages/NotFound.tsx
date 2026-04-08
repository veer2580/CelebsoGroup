import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-slate-900 text-white pt-16">
        <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-8xl md:text-9xl font-serif font-bold mb-4 text-accent">
            404
          </h1>
          <p className="text-2xl font-serif font-bold mb-4">
            Oops! Page not found
          </p>
          <p className="text-lg text-slate-200 mb-8">
            The page you're looking for doesn't exist. But don't worry, you can
            return to our homepage and explore our ventures.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
