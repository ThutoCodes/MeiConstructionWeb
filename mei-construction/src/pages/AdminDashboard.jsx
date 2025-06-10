import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProjectsTable from "../components/ProjectsTable";
import { AddProjectModal } from '../components/AdminDashboardSidebar';

export default function AdminDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - fixed width */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main content takes the rest of the width */}
      <main className="flex-1 p-6 overflow-y-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={openModal}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            aria-label="Add new project"
          >
            + Add Project
          </button>
        </header>

        {/* Removed UsersTable */}
        <section id="projects">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <ProjectsTable />
        </section>
      </main>

      {isModalOpen && <AddProjectModal onClose={closeModal} />}
    </div>
  );
}