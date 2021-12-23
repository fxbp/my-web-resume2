import React from 'react'

import Sidebar2 from './Sidebar2'

function Layout(props: any) {
    console.log(props)
    return (

            <div className="app">                
                <Sidebar2 />
                <main className='content'>
                    {props.children}
                
                </main>
            </div>
        
    )
}

export default Layout
