import React, { useEffect, useState } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import Topic from '../Topic/Topic';
const Chapters = () => {
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        const url = 'https://openapi.programming-hero.com/api/quiz';
        fetch(url)
            .then(response => response.json())
            .then(data => setTopics(data.data))
    }, [])

    return (
        <div className='mt-5 container mx-auto'>
            <div className='flex justify-center bg-orange-800 p-4 rounded-lg md:flex-row flex-col'>
                <img src="https://i.ibb.co/bR7d9mQ/pngwing-com.png" alt="Students" border="0" />
                <div className='flex flex-col items-center'>
                    <img src="https://i.ibb.co/sp7LBn9/pngwing-com.png" alt="pngwing-com" border="0" className='w-1/3' />
                    <p className='text-4xl text-center font-semibold text-white'>Participate This Awesome Quiz and Test Your Knowledge</p>
                    <ArrowDownTrayIcon className="h-14 w-14 text-white" />
                </div>

            </div>
            <div className='mt-20'>
                <h1 className='text-3xl text-center font-semibold text-orange-800'>Tap and Practice</h1>
                <div className='grid lg:grid-cols-4 gap-5 mt-5 md:grid-cols-2'>
                    {
                        topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Chapters;