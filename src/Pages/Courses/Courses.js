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
                        <h3>Courses {courses.length}</h3>
                        {
                            courses.map(course =>
                                <AllCoursesSummery key={course._id}
                                    course={course}></AllCoursesSummery>
                            )
                        }
                    </Col>
                    <Col lg='3'><CourseList></CourseList></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;