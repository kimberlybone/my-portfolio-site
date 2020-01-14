import React from 'react';
import { useSpring, animated } from 'react-spring'
import { Link } from 'react'

function CardInfo( props ){

  const style = useSpring({ opacity: 1, from: { opacity: 0 } })
    return(
      <animated.div className="" style= { style }>
        <p>{ props.title }</p>
        <p>{ props.subTitle }</p>
        <Link>{ props.link }</Link>
      </animated.div >
    )

}
export default CardInfo
