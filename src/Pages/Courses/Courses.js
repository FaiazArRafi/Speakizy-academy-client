import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllCoursesSummery from './AllCoursesSummery';
import CourseList from './CourseList';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='9'>
                        <div className=''>
                            {
                                courses.map(course =>
                                    <AllCoursesSummery key={course._id}
                                        course={course}></AllCoursesSummery>
                                )
                            }
                        </div>
                    </Col>
                    <Col lg='3'><CourseList></CourseList></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;