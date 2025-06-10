import ServiceDetail from '../components/sections/ServiceDetail';
import CapabilityIntro from '../components/sections/CapabilityIntro';

const services = [
  {
    title: "Planning & Delivery",
    icon: "📋",
    description: "Comprehensive project management for cross-border industrial construction",
    features: [
      "Multi-disciplined construction management",
      "Cross-border project expertise",
      "Safe jobsite practices implementation",
      "Fair labor treatment policies"
    ],
    image: "/images/planning.jpg"
  },
  {
    title: "Structural Steel",
    icon: "🔩",
    description: "Complete steel fabrication and erection services",
    features: [
      "Fabrication to design specifications",
      "Erection methodology development",
      "Corrosion protection systems",
      "Quality assurance to ISO standards"
    ],
    image: "/images/structureredSteel.jpg"
  },
  {
    title: "Mechanical Installations",
    icon: "⚙️",
    description: "Specialized industrial equipment installation",
    features: [
      "Pumps, motors, and gearboxes",
      "Overhead cranes and mills",
      "Kilns, pans, and evaporators",
      "Screens, rolls, and crushers"
    ],
    image: "/images/mechanical-installations.jpg"
  },
  {
    title: "Electrical Installations",
    icon: "⚡",
    description: "Full-spectrum electrical systems implementation",
    features: [
      "Cable racks and cabling",
      "Switchgear and transformers",
      "Luminaires and instrumentation",
      "Termination and commissioning"
    ],
    image: "/images/electrical-installations.jpg"
  },
  {
    title: "Piping Systems",
    icon: "🛢️",
    description: "High-quality industrial piping solutions",
    features: [
      "Material-specific fabrication",
      "Welding procedure expertise",
      "Non-destructive testing",
      "Flawless installation standards"
    ],
    image: "/images/piping-systems.jpg"
  }
];

export default function Capabilities() {
  return (
    <div className="container mx-auto py-16 px-6">
      <CapabilityIntro />
      <div className="space-y-20">
        {services.map((service, index) => (
          <ServiceDetail 
            key={index} 
            service={service} 
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}