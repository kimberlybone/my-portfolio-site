import React from 'react';
import Hero from '../ChildComponents/Hero'
import Content from '../ChildComponents/Content'
import MyBasicInfo from '../ChildComponents/MyBasicInfo'
import OtherInfo from '../ChildComponents/OtherInfo'

import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'



function WhoIAmPage( props ){
  const nameStyle = {
     background: 'red',
     color: 'white',
     padding: '1.5rem'
  }
  const fade = useSpring({ from: { opacity: 0, marginTop: -500 }, opacity: 1, marginTop: 0 })
  const fade2 = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1 },
    marginTop: 0,
    config: { delay: 1000, duration: 1000 } })
  const fade3 = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1 },
    marginTop: 0,
    config: { delay: 2000, duration: 2000 } })
  return(
    <div>
      <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
      <Content>
            <div>
              <MyBasicInfo></MyBasicInfo>
              <h4> Fun Fact: </h4>
              <OtherInfo></OtherInfo>
              <p> *Take a look at my resume! <a href="public/SoftwareResume.pdf" download > Download Kimberly's Resume </a></p>
            </div>
      </Content>
    </div>
  )
}
export default WhoIAmPage
