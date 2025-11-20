import React from 'react';
import './Service.css';

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
                    className='service-link.web'>Web Development
                </Link>

                <Link to='app-dev'
                    className='service-link.app'>
                    App development
                </Link>

                <Link to='design'
                    className='service-link.design'>
                    Design
                </Link>

            </div>



        </div>
    )
}

export default Services
