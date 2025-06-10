import { motion } from 'framer-motion';
import { FaHardHat, FaIndustry, FaOilCan } from 'react-icons/fa';

export default function ProjectShowcase() {
  const projects = [
    {
      title: "Mining Project",
      description: "Completed in 2023",
      image: "/images/mining-projects.jpg"
    },
    {
      title: "Cement Plant",
      description: "Turnkey project completed in 2022",
      image: "/images/cement-plant.jpeg"
    },
    {
      title: "Aluminium Plant",
      description: "High-performance production facility",
      image: "/images/aluminium-plant.jpg"
    },
    {
      title: "Pulp & Copper Mining Smelter",
      description: "Sustainable copper and pulp processing",
      image: "/images/copper-smelter.jpg"
    },
    {
      title: "Lime Kiln in a Paper Mill",
      description: "Key infrastructure for lime production",
      image: "/images/lime-kitln.jpg"
    },
    {
      title: "Steel Plant",
      description: "Advanced metallurgical facility",
      image: "/images/steel.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}