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
        name: "spring boot",
        value: 80
    },
    {
        name: "javascript",
        value: 90
    },
    {
        name: "vb.net",
        value: 90
    },
    {
        name: "docker",
        value: 90
    },
    {
        name: "docker-compose",
        value: 90
    },
    {
        name: "kubernetes",
        value: 90
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
                        <Grid key={key} item sm={12} md={6} className="skillItem" >
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
