import React from 'react'


import { TimelineInfo } from '../../dataTypes/ResumeTypes'

import './CustomTimelineItem.css'


function CustomTimelineItem({timeLapse, title, name, description}:TimelineInfo) {
    return (
        <div className='timelineItem'>
            <div className="timeLapse">
                <h6>{timeLapse}</h6>
            </div>
            <div   className='timelineItemContent'>
                <h5>{name}</h5>
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CustomTimelineItem
