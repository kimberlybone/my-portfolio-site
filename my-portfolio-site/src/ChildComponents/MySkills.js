import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import { TweenMax, Power3 } from 'gsap'


function MySkills( props ){

  let mySkills = useRef(null)
  useEffect(() => {
    console.log(mySkills);
    TweenMax.to(
      mySkills,
      0.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: 0.7
      }
    )
  })

  return(
    <div>
      <Container className='h3-what' ref={ elem => { mySkills = elem } }>
        <h3>Tools & Skills</h3>
        <p>HTML</p>
        <p>CSS</p>
        <p>ReactJS</p>
        <p>JavaScript</p>
        <p>Ruby on Rails</p>
        <p>IBM Watson Knowledge Studio & Natural Language Proceessing</p>
        <p>React Hooks</p>
      </Container>
    </div>
  )
}
export default MySkills
