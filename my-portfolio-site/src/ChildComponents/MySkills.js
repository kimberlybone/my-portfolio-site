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
        delay: 1.9
      }
    )
  })

  return(
    <div>
      <Container className='left-what' ref={ elem => { mySkills = elem } }>
        <h3>Tools & Skills</h3>
        <p>Object Oriented Programming</p>
        <p>Customer Service</p>
        <p>Leadership</p>
        <p>Team Building</p>
      </Container>
    </div>
  )
}
export default MySkills
