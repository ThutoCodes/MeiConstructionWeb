// src/components/sections/Testimonials.jsx
import { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  
  const testimonials = [
    {
      quote: "MEI Construction delivered our project on time and within budget.",
      author: "John Smith",
      company: "ABC Mining"
    },
    {
      quote: "Exceptional quality and professional team throughout the project.",
      author: "Sarah Johnson",
      company: "XYZ Engineering"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
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
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={() => setCurrent(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="p-2 rounded-full bg-green-100 text-green-600"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={() => setCurrent(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="p-2 rounded-full bg-green-100 text-green-600"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}