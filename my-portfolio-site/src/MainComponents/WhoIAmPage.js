import React, { useRef, useEffect } from 'react';
import Hero from '../ChildComponents/Hero'
import Content from '../ChildComponents/Content'
import TitlesForWhat from '../ChildComponents/TitlesForWhat'
import TextForWhat from '../ChildComponents/TextForWhat'
import { Container } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import { TweenMax } from 'gsap'
import kim2 from '../Assets/kim2.jpeg'



function WhoIAmPage( props ){

  let page = useRef( null )

  useEffect(() => {
    TweenMax.to( page, 0, { css: { visibility: 'visible' } })
  })
  return(
    <div className="who-page" ref={ elem => page = elem }>
      <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
      <Content>
            <div>
              <TitlesForWhat></TitlesForWhat>
              <TextForWhat></TextForWhat>
              <p> *Take a look at my resume! <a href="public/SoftwareResume.pdf" download > Download Kimberly's Resume </a></p>
            </div>
      </Content>
    </div>
  )
}
export default WhoIAmPage
