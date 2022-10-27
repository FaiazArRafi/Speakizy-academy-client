import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseList from './CourseList';

const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='9'></Col>
                    <Col lg='3'><CourseList></CourseList></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;