import React from 'react';
import Hero from '../ChildComponents/Hero'
import Content from '../ChildComponents/Content'
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
              <h4> Name: </h4> <animated.p style={ fade }>  Kimberly Bone </animated.p>
              <h4> Education: </h4> <animated.p style={ fade2 }>  University of North Carolina at Greensboro c/o May 2019 | Flatiron School's coding bootcamp c/o November 2019.</animated.p>
              <h4> Hobbies: </h4> <animated.p style={ fade3 }>  Cooking, volunteering, photography, and inspiring other women of color </animated.p>
              <h4> Fun Fact: </h4>
              <p> - I am bilingual (I speak Spanish).
                    I traveled to Costa Rica and loved it so much that I went back a second time.
                    The first time to volunteer and the second time to study abroad.
                    Both times I stayed with at least 2 different families where they taught us how to live like a Costa Rican. </p>
              <p> - I'm always eager to learn new things. </p>
              <p> *Take a look at my resume! <a href="public/SoftwareResume.pdf" download > Download Kimberly's Resume </a></p>
            </div>
      </Content>
    </div>
  )
}
export default WhoIAmPage
