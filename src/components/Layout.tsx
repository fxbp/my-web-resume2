import React, { useEffect, useState } from 'react'

import Sidebar from './Sidebar'

import "../App.css"

function Layout(props: any) {
   
    const [windowSmall, setWindowSmall] = useState(true);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
       
    });

    function handleResize() {

        if (window.innerWidth >= 1200 && windowSmall) {
            setWindowSmall(false);
        }
        else if (window.innerWidth < 1200 && !windowSmall) {
            setWindowSmall(true)
        }

    }



    return (

        <div className="app">
            
            <Sidebar
                windowSmall={windowSmall}
            />
            <main className={windowSmall ? 'content-full content' : 'content'}>
                {props.children}

            </main>
        </div>

    )
}

export default Layout
