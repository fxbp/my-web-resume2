import { Grid } from '@material-ui/core'
import React from 'react'


import { TimelineInfo } from '../../dataTypes/ResumeTypes'

import './CustomTimelineItem.css'


function CustomTimelineItem({timeLapse, title, name, description}:TimelineInfo) {
    return (
        <Grid container className='timelineItem' >
            <Grid item  className="timeLapse" >
                <h6>{timeLapse}</h6>
            </Grid>
            <Grid item className='timelineItemContent'>
                <h5>{name}</h5>
                <h6>{title}</h6>
                <p>{description}</p>
            </Grid>
        </Grid>
        
    )
}

export default CustomTimelineItem
