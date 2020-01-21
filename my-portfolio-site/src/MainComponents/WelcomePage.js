import React from 'react';
import Hero from '../ChildComponents/Hero'
import Carousel from '../ChildComponents/Carousel'
import { useSpring, animated } from 'react-spring'


function WelcomePage( props ){

  return(
    <animated.div >
      <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
      <Carousel></Carousel>
    </animated.div>
  )
}
export default WelcomePage
