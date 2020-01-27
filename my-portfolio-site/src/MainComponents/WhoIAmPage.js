import React, { useRef, useEffect } from 'react';
import Hero from '../ChildComponents/Hero'
import Content from '../ChildComponents/Content'
import MyBasicInfo from '../ChildComponents/MyBasicInfo'
import OtherInfo from '../ChildComponents/OtherInfo'
import { Container } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import { TweenMax } from 'gsap'



function WhoIAmPage( props ){

  let page = useRef( null )

  useEffect(() => {
    TweenMax.to( page, 0, { css: { visibility: 'visible' } })
  })
  return(
    <div ref={ elem => page = elem }>
      <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
      <Content>
            <div>
              <MyBasicInfo></MyBasicInfo>
              <OtherInfo></OtherInfo>
              <p> *Take a look at my resume! <a href="public/SoftwareResume.pdf" download > Download Kimberly's Resume </a></p>
            </div>
      </Content>
    </div>
  )
}
export default WhoIAmPage
