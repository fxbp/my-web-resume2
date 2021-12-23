import {List, ListItem } from '@material-ui/core'
import React, { useEffect } from 'react'
import { SidebarData } from "./SidebarData"
import { useNavigate } from 'react-router-dom'

import "../App.css"

function Sidebar2() {

    const history = useNavigate();



    return (
        <div className='sidebar'>
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
    )
}

export default Sidebar2
