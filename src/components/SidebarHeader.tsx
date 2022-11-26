import React from 'react'
import { useNavigate } from 'react-router-dom'

import ProfileImage from '../images/profile.jpeg'

import "./SidebarHeader.css"


function SidebarHeader() {

    const navigate = useNavigate();

    const imageClick = () =>{
        navigate("/")
    }

    return (
        <div className="headerImage">
            <img onClick={imageClick}
                className='object-cover object-center rounded'
                alt="Francesc profile"
                src={ProfileImage}
                />
        </div>
    )
}

export default SidebarHeader
