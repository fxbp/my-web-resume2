import React from 'react'
import Grid from '@mui/material/Grid';

import { WorkInfo } from '../dataTypes/ResumeTypes'

import './CustomTimelineItem.css'


function CustomTimelineItem({timeLapse, jobTitle, workName, description}:WorkInfo) {
    return (
        <div className='timelineItem'>
            <div className="timeLapse">
                <h6>{timeLapse}</h6>
            </div>
            <div   className='timelineItemContent'>
                <h5>{jobTitle}</h5>
                <h6>{workName}</h6>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CustomTimelineItem
