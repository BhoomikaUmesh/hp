import React from 'react';
import Profile from '../Pages/Profile';
import Projects from '../Pages/Projects';
import Testimonial from '../Pages/Testimonial';

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden bg-gradient-to-r from-teal-400 to-yellow-200">
      <div className="p-4 overflow-y-scroll w-full md:w-1/3">
        <Profile />
      </div>
      <div className="p-4 overflow-y-scroll w-full md:w-2/3">
        <Projects />
        <br />
        <Testimonial />
      </div>
    </div>
  );
};

export default HomePage;
