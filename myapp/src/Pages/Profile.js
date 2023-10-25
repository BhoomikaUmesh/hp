import React from 'react';
import profile from '../images/profile.jpg';

const Profile = () => {
  const profileCard = {
    name: 'John Doe',
    role: 'Software Engineer',
    email: 'johndoe@example.com',
    phone: '+1 123 456 7890',
  };

  return (
    <div className="bg-white bg-opacity-70 p-4 rounded shadow">
      <img src={profile} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-semibold mb-2">{profileCard.name}</h2>
      <p className="text-gray-600 mb-2">{profileCard.role}</p>
      <p className="text-gray-600 mb-2">{profileCard.email}</p>
      <p className="text-gray-600 mb-2">{profileCard.phone}</p>
    </div>
  );
};

export default Profile;
