import { useEffect, useState } from "react";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { db } from "../Firebase";

export default function InquiriesTable() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "inquiries"), (snapshot) => {
      setInquiries(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    const inquiryRef = doc(db, "inquiries", id);
    await updateDoc(inquiryRef, { status: newStatus });
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Inquiries</h3>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Message</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Created At</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inq) => (
            <tr key={inq.id}>
              <td className="border px-4 py-2">{inq.name}</td>
              <td className="border px-4 py-2">{inq.email}</td>
              <td className="border px-4 py-2">{inq.message}</td>
              <td className="border px-4 py-2">{inq.status}</td>
              <td className="border px-4 py-2">
                {inq.createdAt?.toDate?.().toLocaleDateString() ?? "-"}
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() =>
                    handleStatusChange(inq.id, inq.status === "Pending" ? "Resolved" : "Pending")
                  }
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Toggle Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}