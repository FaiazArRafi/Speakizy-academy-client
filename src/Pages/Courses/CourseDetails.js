import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const course = useLoaderData();
    const { title, details, image_url, _id } = course;
    return (
        <div style={{ width: "50%" }} className="mx-auto my-3">
            <Card >
                <Card.Img variant="top" src={image_url} className='' />
                <Card.Body>
                    <Card.Title><h3>{title}</h3></Card.Title>
                    <Card.Text className='mb-5 mt-3'>
                        {details}
                        <br />
                        <ul className='mt-3'>
                            <h5>➼ <b>Price</b>: $49 per month</h5>
                            <h5>➼ <b>Time to complete</b>: 3-6 months</h5>
                            <h5>➼ <b>Prerequisites required</b>: None</h5>
                            <h5>➼ <b>Flexible schedule</b>: Yes</h5>
                            <h5>➼ <b>Includes verified certificate of participation</b>: Yes</h5>
                        </ul>
                    </Card.Text>
                    <div className='mx-auto d-flex justify-content-center align-items-center'>
                        <Link to={`/checkout/${_id}`} className='bg-warning mx-auto px-5 py-3 rounded my-2 fw-bolder' style={{ textDecoration: 'none' }} >Get Premium Access</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;