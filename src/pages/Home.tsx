import React from 'react'
import SocialNetwork from '../components/SocialNetwork'

import "./Home.css"

function Home() {
    return (
        <div className='homeArea'>
            <div className='homeContent'>
                <h1>Hi, I am <span>Francesc Bullich</span></h1>
                <p>I am a software engineer focused mainly on backend and DevOps development.  </p>
                <SocialNetwork />
            </div>
        </div>
       
    )
}

export default Home
