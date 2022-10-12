import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const QuizQuestion = ({ qstion, serial }) => {
    const { options, question, correctAnswer } = qstion;
    let isCorrect;
    const handleClick = (selected) => {
        if (correctAnswer === selected) {
            isCorrect = true;
        }
        else {
            isCorrect = false
        }
        console.log(correctAnswer, selected, isCorrect)
    }
    const notify = () => isCorrect ? toast("Wow so easy!") : toast("Not Cool! You may google it.");
    const showCorrectAnswer = () => toast("Correct answer: "+correctAnswer);
    return (
        <div className='border container lg:w-1/2 mx-auto bg-slate-100 mt-10 px-5 py-2 rounded-lg'>
            <div className='grid grid-cols-6 mb-2'>
                <div className=''>

                </div>
                <div className=' col-span-4 '>
                    <p className='text-orange-800 font-semibold w-4/5 mx-auto '>Question {serial+1}:  {question}</p>
                </div>
                <div className=' flex justify-end'>
                    <EyeIcon className='h-5 w-5 cursor-pointer' onClick={showCorrectAnswer}></EyeIcon>
                    
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-4 text-white' >
                {
                    options.map((option, i = 0) => <div className=' bg-orange-800 hover:bg-white hover:text-orange-800 border border-orange-800 py-5 rounded-lg text-center cursor-pointer' key={i} onClick={() => { handleClick(option); notify() }}>
                        
                        <p>{option}</p>
                        
                    </div>)
                }


            </div>

        </div>
    );
};

export default QuizQuestion;