import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../Firebase";
import { db } from "../Firebase"; 
import { doc, getDoc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from "react-router-dom"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const role = docSnap.data().role;

        if (role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/dashboard");
        }
      } else {
        setError("No user data found in database.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userDoc = doc(db, "users", user.uid);
    const docSnap = await getDoc(userDoc);

    if (!docSnap.exists()) {
      
      await setDoc(userDoc, {
        email: user.email,
        role: "user",
      });
      navigate("/dashboard");
    } else {
   
      const role = docSnap.data().role;
      navigate(role === "admin" ? "/admin-dashboard" : "/dashboard");
    }

  } catch (err) {
    setError(err.message);
  }
};

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          Log In
        </button>
      </form>

      <div className="text-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Continue with Google
        </button>
      </div>

      <p className="text-sm mt-2">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}