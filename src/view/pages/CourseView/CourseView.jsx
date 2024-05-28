import React from "react";
import CoursePlayer from "../../layout/CoursePlayer/CoursePlayer";
import CourseSideBar from "../../layout/CourseSideBar/CourseSideBar";

import './style.css'

const CourseView = (props) => {
    return (
        <div className="course-view-container">
            <CoursePlayer />
            <CourseSideBar />
        </div>
    );
}

export default CourseView;