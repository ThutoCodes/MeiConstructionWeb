export default function Topbar() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Admin</span>
        <img src="/avatar.png" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}