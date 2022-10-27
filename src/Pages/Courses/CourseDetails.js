import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const course = useLoaderData();
    const { title, details, image_url, _id } = course;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} className='' style={{ width: '50%' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/checkout/${_id}`} className='bg-warning px-5 py-3 rounded  fw-bolder' style={{ textDecoration: 'none' }} >Get Premium Access</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;