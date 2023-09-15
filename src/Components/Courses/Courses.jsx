import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import './Courses.css'
import PropTypes from 'prop-types';
const Courses = ({HandleBtn}) => {
    const [courses,setCourse]=useState([]);
    useEffect(()=>{
        fetch('Courses.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <div >
           
            <div className="md:w-2/3 card1">
                {
                    courses.map(course => <Course
                    key={course.id}
                    course={course}
                    HandleBtn={HandleBtn}
                  
                    >


                    </Course>)
                }
            </div>
        </div>
       
    );
};
Courses.propTypes={
  
    HandleBtn:PropTypes.func
}
export default Courses;