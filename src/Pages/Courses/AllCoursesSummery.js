import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AllCoursesSummery = ({ course }) => {
    const { _id, title, image_url, points, rating } = course;

    return (
        <div style={{ width: "75%" }} className="mx-auto">

            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <h2>{title}</h2>
                    <div>
                        <FaRegBookmark className='me-3' />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>{points}</Card.Text>
                    <Link to={`/courses/${_id}`} className='bg-success mx-auto px-4 py-2 rounded my-2 fw-bolder text-white' style={{ textDecoration: 'none' }} >See Details</Link>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default AllCoursesSummery;