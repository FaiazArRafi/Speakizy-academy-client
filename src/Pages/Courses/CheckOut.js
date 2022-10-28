import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CheckOut = () => {
    const course = useLoaderData();
    const { name } = course;
    return (
        <div className='text-center my-4'>
            <h3>{name}</h3>
            <h5>Price : 49$ per month</h5>
            <br />
            <button className='bg-warning py-3 px-4 rounded-3 fw-bold text-dark'>Purchase</button>
        </div>
    );
};

export default CheckOut;