import React from 'react'
import EventSlideShow from './EventSlideShow'
import greenShape from '../images/shapes/green-shape-1.svg'
import blueShape from '../images/shapes/blue-shape-1.svg'
import './EventSection.css'

const EventSection = () => {
    return (
        <div className="eventSection">
            <div className="section-content-event">
                <h1 className="title-section"><span id="our">OUR</span> EVENTS</h1>
                <div className="section-container">
                    <div className="slideshow">
                        <EventSlideShow />
                    </div>
                </div>
                <img src={greenShape} alt="greenshape" className="green-svg" />
                <img src={blueShape} alt="blueshape" className="blue-svg" />
            </div>
        </div>
    )
}

export default EventSection