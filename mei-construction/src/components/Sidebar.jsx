import { Link, useLocation } from "react-router-dom";
import {
  FaTools,
  FaEnvelope,
  FaUsers,
  FaChartBar,
  FaFolder,
} from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen fixed left-0 top-0 shadow-lg">
      <div className="p-4 text-2xl font-bold border-b border-gray-600">
        Admin Panel
      </div>
      <nav className="mt-4 space-y-2 px-4">
        <Link
          to="/admin"
          className={`flex items-center gap-2 px-2 py-2 rounded ${
            isActive("/admin") ? "bg-gray-700 text-green-400" : "hover:text-green-400"
          }`}
        >
          <FaChartBar /> Dashboard
        </Link>
        <Link
          to="/admin/inquiries"
          className={`flex items-center gap-2 px-2 py-2 rounded ${
            isActive("/admin/inquiries") ? "bg-gray-700 text-green-400" : "hover:text-green-400"
          }`}
        >
          <FaEnvelope /> Inquiries
        </Link>
        <Link
          to="/admin/projects"
          className={`flex items-center gap-2 px-2 py-2 rounded ${
            isActive("/admin/projects") ? "bg-gray-700 text-green-400" : "hover:text-green-400"
          }`}
        >
          <FaFolder /> Projects
        </Link>
        <Link
          to="/admin/users"
          className={`flex items-center gap-2 px-2 py-2 rounded ${
            isActive("/admin/users") ? "bg-gray-700 text-green-400" : "hover:text-green-400"
          }`}
        >
          <FaUsers /> Users
        </Link>
        <Link
          to="/admin/services"
          className={`flex items-center gap-2 px-2 py-2 rounded ${
            isActive("/admin/services") ? "bg-gray-700 text-green-400" : "hover:text-green-400"
          }`}
        >
          <FaTools /> Services
        </Link>
      </nav>
    </aside>
  );
}