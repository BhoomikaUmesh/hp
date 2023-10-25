import React from 'react';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';

const Projects = () => {
  const projects = [
    { id: 1, name: 'Project 1', description: 'Web Designer', image: project1, creator: 'User1' },
    { id: 2, name: 'Project 2', description: 'Frontend Developer', image: project2, creator: 'User2' },
    { id: 3, name: 'Project 3', description: 'UI/UX Designer', image: project3, creator: 'User3' },
    { id: 4, name: 'Project 4', description: 'Full Stack Developer', image: project4, creator: 'User4' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white bg-opacity-70 p-4 rounded shadow">
            <img src={project.image} alt={project.name} className="object-cover w-full h-32 rounded" />
            <h2 className="mt-2 text-xl font-semibold hover:text-gray-500">{project.name}</h2>
            <p className="hover:text-gray-500 font-serif">{project.description}</p>
            <p className="mt-2 text-sm text-gray-500 hover:text-gray-700">Created by {project.creator}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
