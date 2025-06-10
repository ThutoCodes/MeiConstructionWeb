import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  // Fetch users
  useEffect(() => {
    const unsubscribeUsers = onSnapshot(collection(db, "users"), (snapshot) => {
      const usersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersData);
    });

    const unsubscribeInquiries = onSnapshot(collection(db, "inquiries"), (snapshot) => {
      const inquiriesData = snapshot.docs.map((doc) => doc.data());
      setInquiries(inquiriesData);
    });

    return () => {
      unsubscribeUsers();
      unsubscribeInquiries();
    };
  }, []);

  // Helper to count inquiries per userId
  const countInquiries = (userId) => {
    return inquiries.filter((inq) => inq.userId === userId).length;
  };

  return (
    <div className="bg-white p-4 rounded shadow ml-64">
      <h3 className="text-2xl font-bold mb-4">Users</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Last Login</th>
            <th className="border px-4 py-2">Inquiry Count</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">
                {user.lastLogin?.toDate?.().toLocaleString() ?? "-"}
              </td>
              <td className="border px-4 py-2">{countInquiries(user.id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}