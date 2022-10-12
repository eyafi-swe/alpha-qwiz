import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Analysis = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        const url = 'https://openapi.programming-hero.com/api/quiz';
        fetch(url)
            .then(response => response.json())
            .then(data => setDatas(data.data))
    }, [])
    
    return (
        <div className='mt-10'>
            <h1 className='text-center text-3xl text-orange-800 font-semibold'>Graphical Analysis</h1>
            <p className='text-center text-gray-400'>A graphical analysis of quizes</p>

            <div className='mt-10 flex md:justify-center border lg:w-1/2 mx-auto rounded-md'>
                <ResponsiveContainer width="90%" height={400}>
                    <BarChart data={datas}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Analysis;