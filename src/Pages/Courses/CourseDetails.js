import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const course = useLoaderData();
    const { title, details, image_url } = course;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} className='' style={{ width: '50%' }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;