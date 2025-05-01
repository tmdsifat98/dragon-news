import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='py-4'>
            <Navbar/>
            </div>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;