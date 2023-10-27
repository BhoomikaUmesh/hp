import React from 'react';
import profile from '../images/profile.jpg';
import backgroundImg2 from '../images/background2.png';

const Profile = () => {
  const profileCard = {
    name: 'John Doe',
    role: 'Software Engineer',
    email: 'johndoe@example.com',
    phone: '+1 123 456 7890',
  };

  return (
    <div className="bg-gradient-to-t from-gray-600 to-gray-200 h-screen pt-10" style={{ backgroundImage: `url(${backgroundImg2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div className="bg-opacity-50 p-6 h-100 rounded-md shadow-lg max-w-md mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 ">
        <div className="flex flex-col items-start">
          <img src={profile} alt="Profile" className="w-26 h-26 rounded-full mb-4" />

          <div className="text-left">
            <h2 className="text-2xl font-semibold mb-2 text-white">{profileCard.name}</h2>
            <p className="text-gray-300 mb-2">{profileCard.role}</p>
            <p className="text-gray-300 mb-2">{profileCard.email}</p>
            <p className="text-gray-300 mb-4">{profileCard.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
