export default function CapabilityIntro() {
  return (
    <section className="mb-20 text-center">
      <h1 className="text-4xl font-bold mb-8">Our Capabilities</h1>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
        We have extensive knowledge in multi-disciplined construction management and cross-border projects, 
        delivering excellence through safe practices and quality assurance.
      </p>
      <div className="grid md:grid-cols-4 gap-6 mt-12">
        {["Health & Safety", "Quality Control", "Subcontractor Empowerment", "Sustainable Practices"].map((item) => (
          <div key={item} className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-green-700">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}