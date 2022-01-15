import React from 'react'

import SchoolIcon from '@mui/icons-material/School';

import { TimelineInfo } from '../../dataTypes/ResumeTypes'
import CustomTimeline from './CustomTimeline';


const studyData:TimelineInfo[] = [
    {
        name: "Universitat de Girona",
        timeLapse: "2015 - 2020",
        title: "University degree in Computer Engineering",
        description: ""
    },
    {
        name: "IES Montilivi",
        timeLapse: "2013 - 2015",
        title: "Higher Technician in Multi-platform Applications Development",
        description: ""
    },
    {
        name: "IES Pla de l'estany",
        timeLapse: "2010-2012",
        title: "Technician in Microcomputer Systems and Networks",
        description: ""
    },
    

]
 

function EducationTimeline() {
    return (
        <div>
            <h4 className='contentTitle'>
                Education
            </h4>
            <CustomTimeline 
                timelineData={studyData}
                icon={<SchoolIcon />}
            />
        </div>
    )
}



export default EducationTimeline
