import React from 'react'
import Part from './Part'
import Header from './Header'
import TotalAmount from './TotalAmount'

const Course = ({ course }) => {
    return (
        <div>
            <Header courses={course} />
            <Part parts={course.parts} />
            <TotalAmount parts={course.parts} />
        </div>
    )
}

export default Course
