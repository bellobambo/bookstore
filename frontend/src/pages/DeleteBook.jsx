import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';

const DeleteBook = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setpublishYear] = useState('')
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams()

  const handleDeleteBook = ()=>{
    setIsLoading(true)
    axios.delete(`https://bookstore-oi6n-bellos-projects-6778aa0d.vercel.app/${id}`).then(()=>{
      setIsLoading(false)
      navigate('/')
    }).catch((error)=>{
      setIsLoading(false)
      alert('An Error Occured. Please Retry ');
      console.log(error)
    })
  }


  return (
    <div className='p-4'>
    <BackButton  />
    <h1 className='text-3xl my-4'>Delete Book</h1>
    {loading ? <Spinner /> : ''}
    <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
      <h3 className='text-2xl'>Are You Sure You want to delete this book?</h3>

      <button
        className='p-4 bg-red-600 text-white m-8 w-full'
        onClick={handleDeleteBook}
      >
        Yes, Delete it
      </button>
    </div>
  </div>
  )
}

export default DeleteBook