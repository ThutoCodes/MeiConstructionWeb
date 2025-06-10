export default function DashboardCard({ title, count, icon }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
      <div className="text-3xl text-green-600">{icon}</div>
      <div>
        <h2 className="text-gray-600 text-sm">{title}</h2>
        <p className="text-xl font-bold">{count}</p>
      </div>
    </div>
  );
}