import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    { value: "60+", label: "Years Combined Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "5", label: "Industrial Sectors" }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-green-50 py-16"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Track Record
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm text-center"
            >
              <p className="text-5xl font-bold text-green-600 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}