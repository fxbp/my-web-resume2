import React from 'react'


import WorkIcon from '@mui/icons-material/Work';

import { TimelineInfo } from '../../dataTypes/ResumeTypes'
import CustomTimeline from './CustomTimeline';


const workData:TimelineInfo[] = [
    {
        name: "éKratos Digital Systems",
        timeLapse: "October 2020 - Present",
        title: "Software Engineer",
        description: "Development of backend services for the ekratos electronic voting platform with blockchain technology."
    },
    {
        name: "Universitat de Girona",
        timeLapse: "September 2019 - September 2020",
        title: "Internship at university of Girona",
        description: "Research and development of projects related to blockchain technology, distributed systems, operating systems and networks."
    },
    {
        name: "Estudis i Projectes informàtics",
        timeLapse: "June 2015 - August 2019",
        title: "Software depeveloper",
        description: "Develop and maintain business applications for different sectors. Improve existing functionalities within applications. Work together with other team members."
    },
    {
        name: "Llagos 2005 S.L.",
        timeLapse: "July 2012 - June 2015",
        title: "Computer technician",
        description: "Assembly, preparation and repair of computers. Dependent tasks in a small local business."
    },

]
 


function WorkTimeline() {
    return (
        <div>
            <h4 className='contentTitle'>
                Working expirience
            </h4>
            <CustomTimeline 
                timelineData={workData}
                icon={<WorkIcon />}
            />
        </div>
        
    )
}

export default WorkTimeline
