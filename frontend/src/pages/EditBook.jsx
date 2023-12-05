import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const EditBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setpublishYear] = useState('')
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams()

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setpublishYear(response.data.publishYear)
        setTitle(response.data.title)
        setIsLoading(false);
      }).catch((error) => {
        setIsLoading(false)
        alert('An Error Occured. Please Retry ');
        console.log(error)
      })
  }, [])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setIsLoading(true);
    axios.put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setIsLoading(false);
        navigate('/')
      })
      .catch((error) => {
        setIsLoading(false);
        alert('An Error Occcured')
        console.log(error)
      })
  }



  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500' value={title}>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='border-2 border-gray-500 px-4 py-4 w-full' />
        </div>


        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500' value={author}>Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className='border-2 border-gray-500 px-4 py-4 w-full' />
        </div>


        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500' value={publishYear}>Public Year</label>
          <input type="text" value={publishYear}  onChange={(e) => setpublishYear(e.target.value)} className='border-2 border-gray-500 px-4 py-4 w-full' />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>Save</button>
      </div>
    </div>
  )
}

export default EditBook