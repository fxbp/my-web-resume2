import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import WorkTimeline from '../components/WorkTimeline';

function Resume() {
    return (
        <>
            <div  className='contentSection'>
                <div className='contentTitle' >
                    <h2><span>My Skills</span></h2>
                </div>
               
            </div>
            <div  className='contentSection'>
                <div className='contentTitle' >
                    <h2><span>Resume</span></h2>
                </div>
                <Box flexGrow={1}>
                    <Grid container >
                        <Grid item md={12} lg={6} className="">
                         <WorkTimeline />   
                        </Grid> 
                    </Grid>
                </Box>
               
            </div>
        </>
    )
}

export default Resume
