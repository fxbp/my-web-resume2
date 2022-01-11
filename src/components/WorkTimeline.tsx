import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import WorkIcon from '@mui/icons-material/Work';

import { WorkInfo } from '../dataTypes/ResumeTypes'
import CustomTimelineItem from './CustomTimelineItem';

import { createTheme } from "@material-ui/core/styles";
import { TimelineOppositeContent } from '@mui/lab';

const workData:WorkInfo[] = [
    {
        workName: "éKratos Digital Systems",
        timeLapse: "October 2020 - Present",
        jobTitle: "Software Engineer",
        description: "Development of backend services for the ekratos electronic voting platform with blockchain technology."
    },
    {
        workName: "Universitat de Girona",
        timeLapse: "September 2019 - September 2020",
        jobTitle: "Internship at university of Girona",
        description: "Research and development of projects related to blockchain technology, distributed systems, operating systems and networks."
    },
    {
        workName: "Estudis i Projectes informàtics",
        timeLapse: "June 2015 - August 2019",
        jobTitle: "Software depeveloper",
        description: "Develop and maintain business applications for different sectors. Improve existing functionalities within applications. Work together with other team members."
    },
    {
        workName: "Llagos 2005 S.L.",
        timeLapse: "July 2012 - June 2015",
        jobTitle: "Computer technician",
        description: "Assembly, preparation and repair of computers. Dependent tasks in a small local business."
    },

]
 


function WorkTimeline() {
    return (
        <div >
        <Timeline position='right'  >
            {
                workData.map((item :WorkInfo, key) =>{
                    return(
                        <TimelineItem key={key} >
                            <TimelineOppositeContent style= {{ flex: 0}}>

                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <WorkIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <CustomTimelineItem
                                    timeLapse={item.timeLapse}
                                    workName={item.workName}
                                    jobTitle={item.jobTitle}
                                    description={item.description} />
                            </TimelineContent>
                        </TimelineItem>
                    )
                })
            }
        </Timeline>
        </div>
    )
}

export default WorkTimeline
