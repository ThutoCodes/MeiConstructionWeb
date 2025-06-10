import { Link } from 'react-router-dom'; // Add this import
import { motion } from 'framer-motion';
import { FaGlobeAfrica, FaHandshake, FaIndustry } from 'react-icons/fa';


const sections = [
  {
    title: "Multi-disciplined Industrial Specialists",
    content: "We are a Specialist Multi-disciplined Industrial Construction Company created in the new era of Engineering & Construction, focusing on the Mining, Engineering and Infrastructural Construction Sectors. Our core expertise lies in structural steel, mechanical, electrical and piping disciplines.",
    icon: <FaIndustry className="text-4xl text-green-600 mb-4" />,
    img: "/images/industrial.jpg"
  },
  {
    title: "Global Expertise",
    content: "Our expertise goes beyond the South African market with substantial cross-border project experience. We bring expeditious construction delivery, safe work practices, and quality assurance to every project.",
    icon: <FaGlobeAfrica className="text-4xl text-green-600 mb-4" />,
    img: "/images/global-projects.jpg"
  },
  {
    title: "Community Commitment",
    content: "We localize subcontractors, suppliers and labour to build strong community relationships. Partnering with MEICS results in superior project delivery while empowering local communities.",
    icon: <FaHandshake className="text-4xl text-green-600 mb-4" />,
    img: "/images/community.jpg"
  }
];

export default function HomeSections() {
  return (
    <div className="container mx-auto px-6 py-16 space-y-20">
      {sections.map((section, index) => (
        <motion.section 
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}
        >
          {/* Image on left for even, right for odd */}
          <div className={`${index % 2 === 0 ? 'order-1' : 'order-2 md:order-1'}`}>
            <img 
              src={section.img} 
              alt={section.title}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          {/* Content */}
          <div className={`${index % 2 === 0 ? 'order-2' : 'order-1 md:order-2'}`}>
            <div className="flex flex-col items-start">
              {section.icon}
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{section.content}</p>
              {index === 0 && (
                <Link 
                  to="/approach" 
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Learn about our approach →
                </Link>
              )}
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}
