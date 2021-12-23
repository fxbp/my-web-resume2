import React from 'react'
import "../App.css"

import { SidebarData } from "./SidebarData"

function Sidebar() {
    return (
        <div className='sidebar'>
            
            <ul className='sidebarList'>
            {
            
                SidebarData.map((item, key) => {
                    return (<li 
                                id={window.location.pathname === item.link? "active":""}
                                className="row"
                                key={key} 
                                onClick={() => {window.location.pathname = item.link}}>
                            <div id="title">{item.title}</div>
                        </li>
                    )
                })
            }
            </ul>
            
        </div>
    )
}

export default Sidebar
