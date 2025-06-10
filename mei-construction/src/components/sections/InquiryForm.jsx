import React, { useState } from "react";
import { db } from "../../Firebase";
import { addDoc, collection, serverTimestamp, setDoc, doc } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";

export default function InquiryForm() {
  const { currentUser } = useAuth(); // gets the current authenticated user
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save inquiry
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        userId: currentUser?.uid || "guest",
        userEmail: currentUser?.email || formData.email,
        createdAt: serverTimestamp(),
      });

      
      if (currentUser) {
        await setDoc(doc(db, "users", currentUser.uid), {
          email: currentUser.email,
          displayName: currentUser.displayName || formData.name,
          lastLogin: serverTimestamp(), 
          
        }, { merge: true }); 
      }

      alert("Inquiry submitted successfully.");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit. Try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl p-6 bg-white shadow-md rounded-xl space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800">Send an Inquiry</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full p-3 border border-gray-300 rounded-md"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="w-full p-3 border border-gray-300 rounded-md"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows="5"
        required
        className="w-full p-3 border border-gray-300 rounded-md"
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
      >
        Submit Inquiry
      </button>
    </form>
  );
}