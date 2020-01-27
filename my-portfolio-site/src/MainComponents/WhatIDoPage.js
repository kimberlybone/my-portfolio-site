import React, { useRef, useEffect } from 'react';
import Hero from '../ChildComponents/Hero'
import MySkills from '../ChildComponents/MySkills'
import MyMedia from '../ChildComponents/MyMedia'
import { Container } from 'react-bootstrap'
import { TweenMax, Power3 } from 'gsap'


function WhatIDoPage( props ){

  let whatIDo = useRef( null )

  useEffect(() => {
    console.log(whatIDo);
    TweenMax.to(
      whatIDo,
      0.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut
      }
    )
  })

  let page = useRef( null )

  useEffect(() => {
    TweenMax.to( page, 0, { css: { visibility: 'visible' } })
  })

  return(
    <div ref={ elem => page = elem }>
      <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
      <Container className='h3-what' ref={ e => { whatIDo = e } }>
        <MyMedia></MyMedia>
        <MySkills></MySkills>
      </Container>
    </div>
  )
}
export default WhatIDoPage
