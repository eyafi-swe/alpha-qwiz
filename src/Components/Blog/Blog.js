import React from 'react';

const Blog = ({ blog }) => {
    const { title, image, date, author, description } = blog;
    return (
        <div className='border bg-slate-200 rounded-md'>
            <img src={image} alt="" className='rounded-t-md' />
            <div className='px-3 my-3'>
                <p className='text-gray-600 text-sm'>{date} by <span className='text-base text-orange-600 font-semibold'>{author}</span></p>
                <h2 className='text-xl font-semibold'>{title}</h2><br />
                <p className='text-justify text-gray-700'>{description}</p>
            </div>
        </div>
    );
};

export default Blog;