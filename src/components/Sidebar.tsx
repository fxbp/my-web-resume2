import {List, ListItem } from '@material-ui/core'
import React from 'react'
import { SidebarData } from "./SidebarData"
import { useNavigate } from 'react-router-dom'


import "../App.css"
import SidebarHeader from './SidebarHeader'


interface SidebarProps{
    windowSmall: boolean
}

function Sidebar( { windowSmall }: SidebarProps ) {

    const history = useNavigate();

    return (
        <nav className={ windowSmall?'sidebar md sidebar-left':'sidebar md ' }>
            <div className='sidebar-inner'>
                <SidebarHeader />
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
                    
                </div>
            </div>
        </nav>
    )
}

export default Sidebar
