import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AllCoursesSummery = ({ course }) => {
    const { _id, author, title, total_view, image_url, details, rating } = course;

    return (
        <div>

            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image src={author?.img} className='me-3' roundedCircle style={{ height: '60px' }} />
                        <div>
                            <p className='mb-0'>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-3' />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 150) + '...'} <Link to={`/courses/${_id}`}>Read More</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye className='me-2'></FaEye>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default AllCoursesSummery;