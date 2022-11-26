import React from 'react'

import './SocialNetwork.css'

import  {SocialNetworkData} from './SocialNetworkData';
import { ListItem } from '@material-ui/core';

function SocialNetwork() {
    return (
        <div className='socialNetworkContent'>    
                {
                    SocialNetworkData.map((element,key) =>{
                        return (
                            <ListItem 
                                key={key}
                                className="socialItem"

                            >
                                <a href={element.link} target='_blank' rel='noreferrer'>
                                    {element.icon}
                                </a>

                            </ListItem>
                        )
                    })
                }
                
            
        </div>
    )
}

export default SocialNetwork
