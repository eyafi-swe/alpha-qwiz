import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks =(props) => {
    const {rout} = props;
    let activeStyle = {
        borderBottom: "1px solid red",
      };
    
    return (
        <div className=''>
            {/* <a href= {rout.path} className='mx-4 hover:text-rose-700'>{rout.name}</a> */}
            <NavLink className='mx-4 hover:bg-slate-400 px-2 py-1' to = {rout.path} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>{rout.name}</NavLink>
        </div>
    );
};

export default NavLinks;