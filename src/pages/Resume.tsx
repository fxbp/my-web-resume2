import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import WorkTimeline from '../components/Timeline/WorkTimeline';
import EducationTimeline from '../components/Timeline/EducationTimeline';
import Skills from '../components/Skills';

function Resume() {
    return (
        <>
            
            <div  className='contentSection'>
                <div className='contentTitle' >
                    <h2><span>Resume</span></h2>
                </div>
                <Box flexGrow={1}>
                    <Grid container >
                        
                        <Grid item className="">
                            <EducationTimeline />   
                        </Grid> 
                        <Grid item className="">
                            <WorkTimeline />   
                        </Grid> 
                    </Grid>
                </Box>
               
            </div>
            <div  className='contentSection'>
                <div className='contentTitle' >
                    <h2><span className=''>My Skills</span></h2>
                </div>
                <Box flexGrow={1}>
                    <Skills />
                </Box>
               
            </div>
        </>
    )
}

export default Resume
