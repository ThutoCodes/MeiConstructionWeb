import React from 'react';
import ProjectShowcase from '../components/sections/ProjectShowcase';

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
      <ProjectShowcase />
    </div>
  );
}