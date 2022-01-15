import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import React from 'react'
import { TimelineInfo } from '../../dataTypes/ResumeTypes'
import CustomTimelineItem from './CustomTimelineItem'


interface CustomTimelineProps {
    timelineData: TimelineInfo[];
    icon: JSX.Element;
}

function CustomTimeline({ timelineData, icon}: CustomTimelineProps) {
    return (
        <Timeline position='right'  >
        {
            timelineData.map((item :TimelineInfo, key) =>{
                return(
                    <TimelineItem key={key} >
                        <TimelineOppositeContent style= {{ flex: 0}}>

                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                {
                                    icon 
                                }
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <CustomTimelineItem
                                timeLapse={item.timeLapse}
                                name={item.name}
                                title={item.title}
                                description={item.description} />
                        </TimelineContent>
                    </TimelineItem>
                )
            })
        }
    </Timeline>
    )
}

export default CustomTimeline
