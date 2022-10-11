import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';

const QuizQuestion = ({ qstion, selected, setSelected, handleClick }) => {
    const { options, question } = qstion;
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
            <div className='grid md:grid-cols-2 gap-4 text-white' >
                {
                    options.map(option => {
                        return <div className=' bg-orange-800 py-5 px-1 rounded-lg text-center' onClick={() => {
                            setSelected(option);
                          }}>
                            <label className='cursor-pointer' >
                                <input type="radio" name='selected-answer' value={option} onClick={() => handleClick(qstion)}  />
                                <span className='ml-1'>{option}</span>
                            </label>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default QuizQuestion;