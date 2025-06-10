import React from 'react';

export default function Map() {
  return (
    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="MEICS Location"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.0203281406336!2d28.140197915027243!3d-26.18779878344337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950be06b5f9f79%3A0x5d0a9055e5efcd8e!2sBedfordview%20Office%20Park!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}