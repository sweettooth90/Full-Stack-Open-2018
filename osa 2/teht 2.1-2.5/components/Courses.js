import React from 'react'
import Course from './Course'
import BigHeader from './BigHeader'

const Courses = ({ courses }) => {
    return (
        <div>
            <BigHeader />
            {courses.map(course => <Course key={course.id} course={course} />)}
        </div>
    )
}

export default Courses
