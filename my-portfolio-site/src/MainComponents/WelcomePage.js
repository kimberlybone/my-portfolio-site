import React, { useRef, useEffect } from 'react';
import Hero from '../ChildComponents/Hero'
import Carousel from '../ChildComponents/Carousel'
import { TweenMax, Power3 } from 'gsap'


function WelcomePage( props ){

  let page = useRef( null )

  useEffect(() => {
    TweenMax.to( page, 0, { css: { visibility: 'visible' } })
  })

  return(
    <div ref={ elem => page = elem }>
      <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
      <Carousel></Carousel>
    </div>
  )
}
export default WelcomePage
