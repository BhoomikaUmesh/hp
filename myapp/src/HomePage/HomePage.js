import React from 'react';
import Profile from '../Pages/Profile';
import Projects from '../Pages/Projects';
import Testimonial from '../Pages/Testimonial';


const HomePage = () => {
  return (
    <div className="grid  grid-cols-12">
      {/* Profile section */}
      <div className="col-span-full ">
        <Profile />
      </div>

     
      {/* <div className="col-span-full p-4 bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center shadow-lg shadow-blue-500" style={{ backgroundImage: `url(${backgroundImg})` }}>

      </div> */}

      {/* Gradient background section */}
      <div className="col-span-full bg-gradient-to-b from-gray-100 via-gray-400 to-gray-700">
        {/* Projects section */}
        <div className="p-4">
          <div className="w-full md:w-2/3 mx-auto">
            <Projects />
          </div>
        </div>
      </div>

      {/* Testimonials section - Full Width */}
      <div className="col-span-full bg-gradient-to-b from-gray-700 to-gray-100">
        <div className="p-4">
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default HomePage;