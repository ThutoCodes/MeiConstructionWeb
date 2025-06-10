import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { auth } from "../Firebase";
import { db } from "../Firebase"; 
import { doc, setDoc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Assign role based on email
      const role = email === "admin@example.com" ? "admin" : "user";

      // ✅ Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: role
      });

      alert("Registration successful!");
      navigate("/"); // Or navigate to dashboard if needed
    } catch (err) {
      setError(err.message);
    }
  };

const handleGoogleSignUp = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userDocRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userDocRef);

    if (!docSnap.exists()) {
    
      const role = user.email === "admin@example.com" ? "admin" : "user";

      await setDoc(userDocRef, {
        email: user.email,
        role: role,
      });
    }

   
    const role = docSnap.exists() ? docSnap.data().role : user.email === "admin@example.com" ? "admin" : "user";
    navigate(role === "admin" ? "/admin-dashboard" : "/dashboard");

  } catch (err) {
    setError(err.message);
  }
};

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Create an Account</h2>

      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Sign Up
        </button>
      </form>

      <div className="text-center my-4">
        <button
          onClick={handleGoogleSignUp}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Continue with Google
        </button>
      </div>

      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}