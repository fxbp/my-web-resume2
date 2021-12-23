import {List, ListItem } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { SidebarData } from "./SidebarData"
import { useNavigate } from 'react-router-dom'


import "../App.css"

function Sidebar2() {

    const history = useNavigate();

    const [windowSmall, setWindowSmall] = useState(false);

    useEffect(() => {

       

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    function handleResize() {
       
        if(window.innerWidth >= 1200 && windowSmall){
            setWindowSmall(false);
            console.log("ha canviat a gran")
        }
        else if(window.innerWidth < 1200 && !windowSmall){
            setWindowSmall(true)
            console.log("ha canviat a petit")
        }
       
    }


    return (
        <div className='sidebar md'>
            <div className='sidebar-inner'>
                <div className='sidebar-layout'>
                    <div>htest</div>
                    <div className='sidebar-content'>
                    <List className='sidebarList'>
                        {
                            SidebarData.map((item,key) =>{
                                return (
                                    <ListItem 
                                        id={window.location.pathname === item.link? "active":""}
                                        key={key}
                                        className="row"
                                        onClick={() => history(item.link)}
                                        >

                                        <div className="title">
                                            {item.title}
                                        </div>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                    </div>
                    <div>
                        hola
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar2
