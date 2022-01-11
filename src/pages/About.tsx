
import React from 'react'

import './About.css'

import AboutImage from '../images/main-image.jpeg';

import AboutInfo from '../components/AboutInfo';


import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function About() {
    return (
        <div  className='contentSection'>
            <div className='contentTitle' >
                <h2><span>About me</span></h2>
            </div>
            <Box flexGrow={1} >
                <Grid container >
                    <Grid item md={12} lg={6} className="cellImg">
                        <img  className="gridImage" src={AboutImage} />
                    </Grid>
                    <Grid item md={12} lg={6}  className="cell"> 
                        <AboutInfo />
                    </Grid> 
                </Grid>

            </Box>
            
           
        </div>
    )
}

export default About
