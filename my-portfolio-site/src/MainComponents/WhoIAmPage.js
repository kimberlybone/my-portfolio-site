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

  let thisPage = useRef( null )

  useEffect(() => {
    TweenMax.to( thisPage, 0, { css: { visibility: 'visible' } })
  })
  return(
    <div className="who-page" ref={ elem => thisPage = elem }>
      {/* <div className="who-main-div"> */}
          <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
          {/* <Content> */}
          {/* </Content> */}
          <div className="who-wrapper">
            <TitlesForWhat></TitlesForWhat>
          </div>
          <div className="who-wrapper">
            <TextForWhat></TextForWhat>
          </div>
          <p style={{ color: '#080808', fontSize: '30px' }}> *Take a look at my resume! <a href="public/SoftwareResume_copy.pdf" style={{ backgroundColor: 'white', borderRadius: '5px' }}download> Download Kimberly's Resume </a></p><br></br>
          {/* </Content> */}
      {/* </div> */}
    </div>
  )
}
export default WhoIAmPage
