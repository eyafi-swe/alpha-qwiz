import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quiz = () => {
    const quizData = useLoaderData()
    const { data } = quizData;
    const { name, questions, total } = data;
    const [selected,setSelected] = useState('');

    const handleClick = (question)=>{
        const {correctAnswer} = question;
        console.log(correctAnswer,selected)
        if(correctAnswer === selected){
            console.log('Nais')
        }
        else{
            console.log('Not cool')
        }
    }
    // const onChangeValue = (e) => {
    //     const selected_answer = e.target.value;
    //     setSelected(selected_answer);
    // }
   
    return (
        <div className='mt-10 text-center text-orange-800'>
            <h1 className=' text-2xl font-semibold'>Quiz Topic: {name}</h1>
            <p className='font-semibold text-lg'>Total Questions: {total}</p>
            {
                questions.map(qstion => {
                    return <QuizQuestion key={qstion.id} qstion={qstion} selected = {selected} setSelected = {setSelected} handleClick = {handleClick}></QuizQuestion>
                })
            }
        </div>
    );
};

export default Quiz;