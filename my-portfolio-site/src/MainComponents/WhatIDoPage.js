import React, { useRef, useEffect } from 'react';
import Hero from '../ChildComponents/Hero'
import MySkills from '../ChildComponents/MySkills'
import MyMedia from '../ChildComponents/MyMedia'
import MyTools from '../ChildComponents/MyTools'
import MyLanguages from '../ChildComponents/MyLanguages'
import MyCommunityInvolvement from '../ChildComponents/MyCommunityInvolvement'
import { Container } from 'react-bootstrap'
import { TweenMax, Power3 } from 'gsap'
import Carousel from '../ChildComponents/Carousel'


function WhatIDoPage( props ){

  let thisPage = useRef( null )

  useEffect(() => {
    TweenMax.to( thisPage, 0.8, { opacity: 1 } )
  })

  let page = useRef( null )

  useEffect(() => {
    TweenMax.to( page, 0, { css: { visibility: 'visible' } })
  })

  return(
    <div className="what-page" ref={ elem => page = elem }>
      <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
      <Container className='h3-what' ref={ elem => { thisPage = elem } }>
        <h3>Projects</h3>
        <Carousel></Carousel>
        <hr></hr>
        <br></br>
        <MyLanguages></MyLanguages>
        <hr></hr>
        <br></br>
        <br></br>
        <MyTools></MyTools>
        <hr></hr>
        <br></br>
        <br></br>
        <MyMedia></MyMedia>
      </Container>
    </div>
  )
}
export default WhatIDoPage
