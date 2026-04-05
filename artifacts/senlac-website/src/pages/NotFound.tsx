import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-8xl font-bold text-primary/20 mb-4">404</h1>
        <h2 className="font-serif text-2xl font-bold text-primary mb-3">Page Not Found</h2>
        <p className="text-muted-foreground text-sm mb-8">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link to="/">
          <a className="px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-accent transition-colors">
            Return Home
          </a>
        </Link>
      </div>
    </div>
  );
}
