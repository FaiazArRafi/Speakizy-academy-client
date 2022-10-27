import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CheckOut = () => {
    const course = useLoaderData();
    const { name } = course;
    return (
        <div className='text-center'>
            <h3>{name}</h3>
        </div>
    );
};

export default CheckOut;