import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/quiz/${id}`);
    }
    return (
        <div className=' px-5 border py-2 rounded-md'>
            <div className='bg-slate-300'>
                <img src={logo} alt="" />
            </div>
            <div className='flex justify-between mt-5 text-orange-800 font-semibold'>
                <p>{name}</p>
                <p>Total: {total}</p>
                <button className='bg-orange-800 py-1 px-4 rounded text-white flex items-center' onClick={clickHandler}>
                    Attempt
                    <ArrowRightCircleIcon className='h-4 w-4 ml-1 font-semibold'></ArrowRightCircleIcon>
                </button>
            </div>
        </div>
    );
};

export default Topic;