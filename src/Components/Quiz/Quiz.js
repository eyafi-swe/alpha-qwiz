import { useLoaderData } from 'react-router-dom';

import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quiz = () => {
    const quizData = useLoaderData()
    const { data } = quizData;
    const { name, questions, total } = data;
       
    
    return (
        <div className='mt-10 text-center text-orange-800'>
            <h1 className=' text-2xl font-semibold'>Quiz Topic: {name}</h1>
            <p className='font-semibold text-lg'>Total Questions: {total}</p>
            {
                questions.map((qstion, serial = 1) => <QuizQuestion key={qstion.id} qstion={qstion} serial = {serial}></QuizQuestion>)
            }
            
        </div>
    );
};

export default Quiz;