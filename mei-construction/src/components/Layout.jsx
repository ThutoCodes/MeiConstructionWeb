import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <Link to="/" className="text-xl font-bold">MEICS</Link>
        <nav className="space-x-4">
          <Link to="/approach">Approach</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="text-green-600 hover:text-green-700 font-medium">Login</Link>
        </nav>
      </header>

      <main className="mt-4">
        <Outlet />
      </main>
    </div>
  );
}