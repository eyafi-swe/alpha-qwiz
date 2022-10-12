import { useLoaderData } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quiz = () => {
    const quizData = useLoaderData()
    const { status,data } = quizData;
    const { name, questions, total } = data;
    let topicName;
    
    status ? topicName = name : topicName = 'Not Found'
    return (
        <div className='mt-10 text-center text-orange-800'>
            <h1 className=' text-2xl font-semibold'>Quiz Topic:  {topicName}</h1>
            <p className='font-semibold text-lg'>Total Questions: {total}</p>
            
            {
                status ? questions.map((qstion, serial = 1) => <QuizQuestion key={qstion.id} qstion={qstion} serial = {serial}></QuizQuestion>) : <NotFound></NotFound>
            }
            
        </div>
    );
};

export default Quiz;