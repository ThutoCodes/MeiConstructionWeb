import { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    quote: "MEI delivered our mining complex ahead of schedule with zero safety incidents.",
    author: "James Khumalo",
    company: "Khumalo Mining"
  },
  {
    quote: "Their steel erection team is the most professional we've worked with.",
    author: "Sarah van Niekerk",
    company: "Van Niekerk Engineering"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <FaQuoteLeft className="text-green-600 text-2xl mb-4" />
            <p className="text-gray-700 text-lg mb-6">{testimonials[current].quote}</p>
            <div>
              <p className="font-bold">{testimonials[current].author}</p>
              <p className="text-gray-600">{testimonials[current].company}</p>
            </div>
          </div>
          
          <button 
            onClick={() => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md"
          >
            <FaChevronLeft className="text-green-600" />
          </button>
          
          <button 
            onClick={() => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md"
          >
            <FaChevronRight className="text-green-600" />
          </button>
        </div>
      </div>
    </section>
  );
}