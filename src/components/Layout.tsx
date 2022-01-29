import React, { useEffect, useState } from 'react'

import Sidebar from './Sidebar'

import "../App.css"

function Layout(props: any) {
    console.log(props)

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

            <div className="app">                
                <Sidebar 
                    windowSmall={windowSmall}
                />
                <main className={windowSmall?'content-full content':'content'}>
                    {props.children}
                
                </main>
            </div>
        
    )
}

export default Layout
