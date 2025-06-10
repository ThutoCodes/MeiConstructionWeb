import { motion } from 'framer-motion';

const clients = [
  "/logos/mining-company.svg",
  "/logos/engineering-group.svg",
  "/logos/industrial-solutions.svg"
];

export default function Clients() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted By</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="w-40 h-20 flex items-center"
            >
              <img 
                src={client} 
                alt="Client logo" 
                className="w-full h-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}