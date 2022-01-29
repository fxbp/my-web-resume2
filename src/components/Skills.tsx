import {LinearProgress } from '@material-ui/core'
import React from 'react'

import Grid from '@mui/material/Grid';

import { SkillInfo } from '../dataTypes/ResumeTypes'
import './Skills.css'



const skillData:SkillInfo[] = [
    {
        name: "Java",
        value: 90
    },
    {
        name: "Spring Boot",
        value: 80
    },
    {
        name: "Javascript",
        value: 85
    },
    {
        name: "ExpressJS",
        value: 80
    },
    {
        name: "SQL",
        value: 90
    },
    {
        name: "Git",
        value: 85
    },
    {
        name: "VB.NET",
        value: 85
    },
    {
        name: "Docker",
        value: 85
    },
    {
        name: "Kubernetes",
        value: 85
    },
    {
        name: "Bash",
        value: 85
    }
]

function Skills() {


    const middleItem:number = skillData.length/2;
    const firstColumn:SkillInfo[] = skillData.slice(0,middleItem)
    const secondColumn:SkillInfo[] = skillData.slice(middleItem)

    console.log(middleItem)
    console.log(firstColumn)
    console.log(secondColumn)

    return (
        <Grid container justifyContent="space-between" >
            {
                skillData.map((element:SkillInfo,key) => {
                    return(
                        <Grid key={key} item xs={12}  md={6} className="skillItem" >
                            <p>{element.name}</p>
                            <LinearProgress variant='determinate' value={element.value}  className="skillBar" />
                        </Grid>
                    )
                })
            }
        </Grid>

    )
}


export default Skills
