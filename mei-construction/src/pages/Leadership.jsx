import TeamMember from '../components/TeamMember';

const leaders = [
  {
    name: "Yegan Moopen",
    position: "Managing Director",
    bio: "30+ years experience in industrial construction projects across Africa and the Middle East. Specializes in project turnaround strategies.",
    image: "/images/yegan-moopen.jpg"
  }
];

export default function Leadership() {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-16">Our Leadership</h1>
      <div className="grid mnpmd:grid-cols-2 lg:grid-cols-3 gap-12">
        {leaders.map((leader, index) => (
          <TeamMember key={index} member={leader} />
        ))}
      </div>
    </div>
  );
}
