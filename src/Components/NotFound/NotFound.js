import React from 'react';

const NotFound = () => {
    return (
        <div className=' flex flex-col lg:flex-row items-center justify-center border ' style={{ height: "90vh" }}>
            <img src="https://i.ibb.co/M7rhNCB/pngwing-com.png" alt="pngwing-com" border="0" className='h-80' />
            <p className='text-4xl text-center text-red-600 font-extrabold lg:ml-10 mt-10'>Oh NO!! PAGE NOT FOUND!!</p>
        </div>
    );
};

export default NotFound;