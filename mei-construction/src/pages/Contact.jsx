import React from 'react';
import ContactForm from '../components/ContactForm';
import InquiryForm from '../components/sections/InquiryForm';
import Map from '../components/Map';

export default function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-12 p-6">
      <InquiryForm />
      <div>
        <h3 className="text-2xl font-bold mb-4">Our Office</h3>
        {/* If you fix the Map component later */}
        {<Map /> }
        <address className="mt-6 not-italic text-gray-700">
          Unit 7, Bedfordview Office Park<br />
          Johannesburg, South Africa
        </address>
      </div>
    </div>
  );
}