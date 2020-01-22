import React from 'react';
import Hero from '../ChildComponents/Hero'
import Carousel from '../ChildComponents/Carousel'
// import { useSpring, animated } from 'react-spring'


function WelcomePage( props ){

  return(
    <div >
      <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
      <Carousel></Carousel>
    </div>
  )
}
export default WelcomePage
