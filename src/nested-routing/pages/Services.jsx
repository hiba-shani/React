import React from 'react';
import './Service.css';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
    return (
        <div
            className='services-container'>
            <h2
                className='services-title'>Our Services
            </h2>
            <p className='services-subtitle'>Choose One

            </p>
            <div className='services-links'>

                <Link to='web-dev'
                    className='service-link web'>Web Development
                </Link>

                <Link to='app-dev'
                    className='service-link app'>
                    App development
                </Link>

                <Link to='design'
                    className='service-link design'>
                    Design
                </Link>

            </div>

            <Outlet/>



        </div>
    )
}

export default Services
