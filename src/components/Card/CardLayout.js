import React from 'react'
import CardContainer from './CardContainer'
import './Card.css'

/** Renders containers with card components */

const CardLayout = () =>{
    return(
        <div>
            <CardContainer />
            <hr className='Container-divider'/>
            <CardContainer header='Duis aute irure dolor' text='Lorem ipsum dolor sit amet'/>
            <hr className='Container-divider'/>
            <CardContainer title='230,000'/>
        </div>
    )
}

export default CardLayout;