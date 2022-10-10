import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import NavLinks from '../NavLinks/NavLinks';
const Navbar = () => {
    const [open,setOpen] = useState(false);
    const routs = [
        {id:1,name:"Chapters",path:"/"},
        {id:2,name:"Analysis",path:"/analysis"},
        {id:3,name:"Weblog",path:"/weblog"}
    ]

    return (
        <nav className='bg-sky-600 md:px-28  py-3 flex justify-between items-center shadow-md'>
            <h1 className='ml-2 text-2xl font-semibold text-white'>Alpha Qwiz</h1>
            <div className = {`text-white bg-sky-600  md:flex md:w-max md:py-0 w-full py-4 text-center  absolute md:static duration-500 ease-in ${open ? 'top-12' : 'top-[-120px]'}`}>
                {
                    routs.map(rout => <NavLinks key={rout.id} rout = {rout}></NavLinks>)
                }
            </div>
            
            <div className="h-6 w-6 text-white md:hidden mr-2" onClick={()=> setOpen(!open)}>
                {
                    open ? <XMarkIcon/> : <Bars3Icon />               
                }
            </div>
            
        </nav>
    );
};


export default Navbar;