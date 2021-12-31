import { List, ListItem } from '@material-ui/core'
import React, { useEffect, useState } from 'react'



import '../pages/About.css'

interface AboutInfoType{
    field: string,
    value: string
}


const aboutData=[
    {
        field: "Full Name",
        value: "Francesc Xavier Bullich Parra"
    },
    {
        field: "Age",
        value: "1988-12-19T00:00:00.000Z"
    },
    {
        field: "Languages",
        value: "Catalan, Spanish, English"
    },
    {
        field: "Email",
        value: "fxbullich@gmail.com"
    }
]



function AboutInfo() {

    const [info, setInfo] = useState<AboutInfoType[]>([]);

    useEffect(() => {
        let birthDateIndex=  aboutData.findIndex((element) => element.field.toLocaleLowerCase()==='age');
        let birthDate = aboutData[birthDateIndex];
        let newData = [...aboutData]
        if(birthDate){
            console.log(birthDate)
            console.log(new Date(birthDate.value))
            let age =  Date.now() - new Date(birthDate.value).getTime();
            const dateAge = new Date(age)
            let stringAge = Math.abs(dateAge.getUTCFullYear() - 1970).toString();
            console.log(stringAge);
            stringAge=stringAge + " years";
            const newBirthDate={"field":birthDate.field, "value": stringAge};
            newData[birthDateIndex]=newBirthDate;
        }
        setInfo(newData)
       
    },[info]);

    return (
        <div >
            <h3>Hi, I am <span className='colorTheme'>Francesc Bullich</span></h3>
            <p>I am passionate about the world of computing. Throughout my professional life I have worked in different sectors, but what I like the most is software development.</p>
            <p>I like to work in a group and share knowledge while expressing my point of view.</p>
            <p>I try to improve as a professional by exploring new challenges and learning from my teammates.</p>            <List>
                {
                    info.map((item,key) => {
                        console.log(item)
                        return(
                           
                            <ListItem disableGutters={true} key={key} className="aboutList">
                                <b>{item?.field}</b>
                                {item?.value}

                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    )
}

export default AboutInfo
