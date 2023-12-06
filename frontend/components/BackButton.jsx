import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link to={destination} className='flex items-center bg-sky-800 text-white px-4 py-2 rounded-lg'>
        <BsArrowLeft className='text-2xl mr-2' />
        Back
      </Link>
    </div>
  );
};

export default BackButton;
