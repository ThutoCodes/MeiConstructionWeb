import { useEffect, useState } from "react";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";

export default function ProjectsTable() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
      const projectData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectData);
    });

    return () => unsubscribe();
  }, []);

  const toggleStatus = async (projectId, currentStatus) => {
    const newStatus = currentStatus === "Completed" ? "Ongoing" : "Completed";
    const projectRef = doc(db, "projects", projectId);
    try {
      await updateDoc(projectRef, { status: newStatus });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Projects</h3>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Created At</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="border px-4 py-2">{project.name}</td>
              <td className="border px-4 py-2">{project.status}</td>
              <td className="border px-4 py-2">
                {project.createdAt?.toDate?.().toLocaleDateString() ?? "-"}
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => toggleStatus(project.id, project.status)}
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                >
                  Mark as {project.status === "Completed" ? "Ongoing" : "Completed"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}