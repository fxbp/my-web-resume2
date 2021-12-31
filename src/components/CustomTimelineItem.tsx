import React from 'react'
import Grid from '@mui/material/Grid';

import { WorkInfo } from '../dataTypes/ResumeTypes'

function CustomTimelineItem({timeLapse, jobTitle, workName, description}:WorkInfo) {
    return (
        <Grid container>
            <Grid  item md={12} lg={6} >
                <h6>{timeLapse}</h6>
            </Grid>
            <Grid  item md={12} lg={6} >
                <h5>{jobTitle}</h5>
                <h6>{workName}</h6>
                <p>{description}</p>
            </Grid>
        </Grid>
    )
}

export default CustomTimelineItem
