import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';

const QuizQuestion = ({ qstion }) => {
    console.log(qstion);
    const { options, question, correctAnswer } = qstion;
    return (
        <div className='border container lg:w-1/2 mx-auto bg-slate-100 mt-10 px-5 py-2 rounded-lg'>
            <div className='grid grid-cols-6 mb-2'>
                <div>

                </div>
                <div className=' col-span-4 '>
                    <p className='text-orange-800 font-semibold w-4/5 mx-auto '>Question: {question}</p>
                </div>
                <div className=' flex justify-end'>
                    <EyeIcon className='h-5 w-5'></EyeIcon>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-4 text-white'>
                {
                    options.map(option => <p className='border bg-orange-800 py-5 rounded-lg text-center'>{option}</p>)
                }
            </div>
        </div>
    );
};

export default QuizQuestion;