import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h3>Courses {courses.length}</h3>
            <div>
                {
                    courses.map(course => <p key={course._id} course={course}>
                        <div className=''>
                            <Link to={`/courses/${course._id}`} style={{ textDecoration: 'none' }}>{course.name}</Link>
                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default CourseList;