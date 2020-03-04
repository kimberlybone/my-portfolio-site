import React, { useRef, useEffect } from 'react';
import Hero from '../ChildComponents/Hero'
import MySkills from '../ChildComponents/MySkills'
import MyMedia from '../ChildComponents/MyMedia'
import MyTools from '../ChildComponents/MyTools'
import MyLanguages from '../ChildComponents/MyLanguages'
import MyCommunityInvolvement from '../ChildComponents/MyCommunityInvolvement'
import { Container } from 'react-bootstrap'
import { TweenMax, Power3 } from 'gsap'


function WhatIDoPage( props ){

  let whatIDo = useRef( null )

  useEffect(() => {
    TweenMax.to( whatIDo, 0.8, { opacity: 1 } )
  })

  let page = useRef( null )

  useEffect(() => {
    TweenMax.to( page, 0, { css: { visibility: 'visible' } })
  })

  return(
    <div ref={ elem => page = elem }>
      <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
      <Container className='h3-what' ref={ elem => { whatIDo = elem } }>
        <MyLanguages></MyLanguages>
        <hr></hr>
        <MyTools></MyTools>
        <hr></hr>
        <MyMedia></MyMedia>
        <hr></hr>
        <MyCommunityInvolvement></MyCommunityInvolvement>
        <hr></hr>
        <MySkills></MySkills>
      </Container>
    </div>
  )
}
export default WhatIDoPage
