import { auth } from "../Firebase";
import { signOut } from "firebase/auth";

export default function LogoutButton() {
  const handleLogout = () => signOut(auth);

  return (
    <button onClick={handleLogout} className="text-red-500 hover:underline">
      Logout
    </button>
  );
}