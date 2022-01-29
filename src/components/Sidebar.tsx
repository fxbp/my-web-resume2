import {List, ListItem } from '@material-ui/core'
import React, { useEffect, useState, useCallback } from 'react'
import { SidebarData, SidebarDataItem } from "./SidebarData"
import { useNavigate } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import "../App.css"
import SidebarHeader from './SidebarHeader'


interface SidebarProps{
    windowSmall: boolean;
}

function Sidebar( { windowSmall }: SidebarProps ) {

    const history = useNavigate();


    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loaded, setLoaded] = useState(false)
    const [menuIconClasses, setMenuIconClasses] = useState('');
    const [sidebarClasses, setSidebarClasses] = useState('');


    const menuCallback = useCallback(() =>{
        let classes = 'sidebar md ';
        if(!sidebarOpen && ( (loaded && windowSmall) || window.innerWidth < 1200 )){
            classes += 'sidebar-left ';
        }

        if(loaded){
            classes += 'menuTranistion'
        }
        return classes;
    },[loaded, sidebarOpen, windowSmall ])

    const iconCallback = useCallback(() => {
        let classes = 'iconMenu ';
        if(!windowSmall || !loaded){
            classes += 'iconMenu-hide ';
        }
        if(windowSmall && !sidebarOpen){
            classes += 'iconMenu-left ';
        }

        if(loaded){
            classes += 'menuTranistion'
        }
        return classes;
    },[loaded, sidebarOpen, windowSmall ])

    useEffect(() => {
        const iconClasses = iconCallback();
        const menuClasses = menuCallback();
        setMenuIconClasses(iconClasses);
        setSidebarClasses(menuClasses)
        setLoaded(true);
    },[setLoaded, setSidebarClasses, setMenuIconClasses, menuCallback,iconCallback, ]);

    


    const clickLink = (link:string) => {
        history(link);
        setSidebarOpen(false);
    }

    const handleMenuClick = () => {
        setSidebarOpen(!sidebarOpen)
    }


   

  
    return (
        
        <nav className={ sidebarClasses }>
            
            <div className='sidebar-inner'>
                
                <SidebarHeader />
                <div className='sidebar-content'>
                <List className='sidebarList'>
                    {
                        SidebarData.map((item :SidebarDataItem,key) =>{
                            return (
                                <ListItem 
                                    id={window.location.pathname === item.link? "active":""}
                                    key={key}
                                    className="row"
                                    onClick={() => clickLink(item.link)}
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
            
            <div className={menuIconClasses}
                    onClick={() => handleMenuClick()}>
                    {!sidebarOpen ?
                        <MenuIcon fontSize='large' /> :
                        <CloseIcon fontSize='large' />
                    }

                </div>
        </nav>
    )
}

export default Sidebar
