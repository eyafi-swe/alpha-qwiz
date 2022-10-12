import { useLoaderData } from 'react-router-dom';
import QuizNotFound from '../QuizNotFound/QuizNotFound';

import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quiz = () => {
    const quizData = useLoaderData()
    const { status,data } = quizData;
    const { name, questions, total } = data;
    let topicName, totalQuestions;

    status ? topicName = name : topicName = 'Not Found'
    status ? totalQuestions = total : totalQuestions = 'Not Found'
    return (
        <div className='mt-10 text-center text-orange-800'>
            <h1 className=' text-2xl font-semibold'>Quiz Topic:  {topicName}</h1>
            <p className='font-semibold text-lg'>Total Questions: {totalQuestions}</p>
            
            {
                status ? questions.map((qstion, serial = 1) => <QuizQuestion key={qstion.id} qstion={qstion} serial = {serial}></QuizQuestion>) : <QuizNotFound></QuizNotFound>
            }
            
        </div>
    );
};

export default Quiz;