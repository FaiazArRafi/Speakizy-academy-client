import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://project-ten-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h3 className='my-3'>Choose Your Favourite Language</h3>
            <div>
                {
                    courses.map(course => <p key={course._id} course={course}>
                        <div className='my-5'>
                            <Link to={`/courses/${course._id}`} className='bg-info px-5 py-3 rounded fw-bolder text-dark' style={{ textDecoration: 'none' }}>{course.name}</Link>
                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default CourseList;