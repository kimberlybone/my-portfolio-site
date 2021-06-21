import React, { useRef, useEffect } from 'react';
import Hero from '../ChildComponents/Hero'
import Content from '../ChildComponents/Content'
import TitlesForWhat from '../ChildComponents/AboutMeBasic'
import TextForWhat from '../ChildComponents/AboutMeMore'
import { Container } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import { TweenMax } from 'gsap'




function WhoIAmPage( props ){

  let thisPage = useRef( null )

  useEffect(() => {
    TweenMax.to( thisPage, 0, { css: { visibility: 'visible' } })
  })
  return(
    <div className="who-page" ref={ elem => thisPage = elem }>
      {/* <div className="who-main-div"> */}
          <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
          <div className="who-wrapper">
            <TitlesForWhat></TitlesForWhat>
          </div>
          <div className="who-wrapper">
            <TextForWhat></TextForWhat>
          </div>
          <br></br>
      {/* </div> */}
    </div>
  )
}
export default WhoIAmPage
