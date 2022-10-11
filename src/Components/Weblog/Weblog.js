import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Weblog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        const url = 'blog.json';
        fetch(url)
        .then(response => response.json())
        .then(data => setBlogs(data));
    },[])
    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-center text-3xl font-semibold'>Recent Weblogs: {blogs.length}</h1>   
            <p className='text-center text-gray-400'>Read the blogs and enrich your knowledge</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog = {blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Weblog;