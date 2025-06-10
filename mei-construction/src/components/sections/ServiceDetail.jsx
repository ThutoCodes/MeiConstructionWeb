import { motion } from 'framer-motion';

export default function ServiceDetail({ service, reverse }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}
    >
      <div className={`${reverse ? 'md:order-2' : ''}`}>
        <img 
          src={service.image} 
          alt={service.title}
          className="rounded-xl shadow-lg w-full h-80 object-cover"
        />
      </div>
      <div className={`${reverse ? 'md:order-1' : ''}`}>
        <div className="text-4xl mb-4">{service.icon}</div>
        <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
        <p className="text-gray-600 text-lg mb-6">{service.description}</p>
        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}