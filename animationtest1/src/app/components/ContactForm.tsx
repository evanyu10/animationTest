'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../api/send/sendEmail';

export interface FormData {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '75vh', // This will make the div take up the full height of the viewport
    }}>
    <div id="contact" style={{
        backgroundColor: 'white',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        width: '80%',
        padding: '10px',
      }}>
      <h2 className="font-semibold text-2xl sm:text-xl lg:text-3xl mb-2 text-center">Contact Me!</h2> {/* Reduce the font size */}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'> {/* Reduce the margin */}
          <label
            htmlFor='name'
            className='mb-2 block text-sm font-medium text-black' // Reduce the font size and margin
          >
            Full Name
          </label>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md' // Reduce the padding and font size
            {...register('name', { required: true })}
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='email'
            className='mb-2 block text-sm font-medium text-black'
          >
            Email Address
          </label>
          <input
            type='email'
            placeholder='example@domain.com'
            className='w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('email', { required: true })}
          />
        </div>
        <div className='mb-3'>
          <label
            htmlFor='message'
            className='mb-2 block text-sm font-medium text-black'
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder='Type your message'
            className='w-full resize-none rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div>
          <button className='px-4 p-2 w-full sm:w-fit rounded-full mr-2 mb-2 sm:mb-0 bg-gradient-to-br from-purple-200 to-purple-500 hover:bg-slate-200 hover:text-black text-white'> {/* Reduce the padding, margin and width */}
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;
