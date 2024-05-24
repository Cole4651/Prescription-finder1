import React from 'react';
import "./pages.css";
import randumb from "./IMG_6463.JPG"

function Homepage () {
    return (
        <div className="body">
            <h1 className='head'>Calendarapp</h1>
            <div className="page">
                <h2>Home Page</h2>
                <p>Welcome to the Home Page.</p>
            </div>
            <div className="page">
                <h2>Welcome to CalendarApp</h2>
                <p>"name" is a user-friendly prescription finder application designed to simplify the process of locating and obtaining prescribed medications by organizing scheduling. Whether you're a patient searching for a specific medication, a healthcare provider looking to streamline prescription management, or a caregiver assisting others with their healthcare needs, "name" is here to help make this process less annoying than it needs to be. </p>
            </div>
            <div className="fleximg">
                <img className="promopic" src={randumb} alt="randumb" />
                <img className="promopic" src={randumb} alt="randumb" />            
            </div>
            <div className="splitcontainer">
                <p class="splitpage"> Problem. </p>
                <p class="splitpage">Our solution. </p>
            </div>
        </div>
    
    )
}

export default Homepage;