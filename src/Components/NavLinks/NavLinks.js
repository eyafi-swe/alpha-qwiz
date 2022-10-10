import React from 'react';

const NavLinks =(props) => {
    const {rout} = props;
    return (
        <div className=''>
            <a href= {rout.path} className='mx-4 hover:text-rose-700'>{rout.name}</a>
        </div>
    );
};

export default NavLinks;