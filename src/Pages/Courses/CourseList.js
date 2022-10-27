import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const CourseList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-list')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])
    return (
        <div>
            <h4>All Language Courses {list.length}</h4>
            <div>
                {
                    list.map(list => <p key={list.id}>
                        <Link>{list.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default CourseList;