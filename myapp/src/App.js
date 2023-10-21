import React from 'react';
import './App.css';


function App() {
  const projects = [
    {id: 1, name: 'Project 1', description: 'This is project 1', image: 'image1.jpg', creator: 'User1'},
    {id: 2, name: 'Project 2', description: 'This is project 2', image: 'image2.jpg', creator: 'User2'},
    {id: 3, name: 'Project 3', description: 'This is project 3', image: 'image3.jpg', creator: 'User3'},
    {id: 4, name: 'Project 4', description: 'This is project 4', image: 'image4.jpg', creator: 'User4'},
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <nav className="flex items-center justify-between p-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-blue-700">
        <div className="flex flex-col items-center space-x-4">
          <img src="logo.jpg" alt="Logo" className="w-8 h-8"/>
          <h1 className="text-3xl font-semibold">Project Management</h1>
        </div>
      </nav>
      <div className="flex flex-grow overflow-hidden">
        <div className="p-4 overflow-y-scroll w-full">
          <h1 className="text-3xl font-semibold text-white hover:text-gray-300">Projects</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col items-center justify-center p-4 bg-white bg-opacity-50 rounded shadow transform transition duration-500 ease-in-out hover:scale-105 hover:bg-gray-200">
                <img src={project.image} alt={project.name} className="object-cover w-full h-32 rounded"/>
                <h2 className="mt-2 text-xl font-semibold hover:text-gray-500">{project.name}</h2>
                <p className="hover:text-gray-500">{project.description}</p>
                <p className="mt-2 text-sm text-gray-500 hover:text-gray-700">Created by {project.creator}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between p-4 space-y-4 overflow-y-scroll bg-gradient-to-r from-green-400 via-green-500 to-green-600 w-64 hover:bg-green-700">
          <div>
            <div className="flex items-center space-x-2">
              <img src="profile.jpg" alt="Profile" className="w-8 h-8 rounded-full"/>
              <h2 className="text-lg font-semibold hover:text-white">Profile</h2>
            </div>
            <hr className="my-4 border-t border-gray-200"/>
            <div className="flex items-center space-x-2">
              <img src="testimonial.jpg" alt="Testimonials" className="w-8 h-8 rounded-full"/>
              <h2 className="text-lg font-semibold hover:text-white">Testimonials</h2>
            </div>
            <hr className="my-4 border-t border-gray-200"/>
            <div className="flex items-center space-x-2">
              <img src="social.jpg" alt="Social Feed" className="w-8 h-8 rounded-full"/>
              <h2 className="text-lg font-semibold hover:text-white">Social Feed</h2>
            </div>
          </div>
          <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default App;
