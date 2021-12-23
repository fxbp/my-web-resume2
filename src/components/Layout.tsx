import React from 'react'

import Sidebar2 from './Sidebar2'

function Layout(props: any) {
    console.log(props)
    return (

            <div className="layout">                
                <Sidebar2 />
                <div className='content'>
                    {props.children}
                
                </div>
            </div>
        
    )
}

export default Layout
