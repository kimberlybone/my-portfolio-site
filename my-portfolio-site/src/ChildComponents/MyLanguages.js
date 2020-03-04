import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import { TweenMax, Power3 } from 'gsap'


function MyLanguages( props ){

  let myLanguages = useRef(null)
  useEffect(() => {
    console.log(myLanguages);
    TweenMax.to(
      myLanguages,
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
      <Container className='left-what' ref={ elem => { myLanguages = elem } }>
        <h3>Languages</h3>
        <p>HTML</p>
        <p>JavaScript</p>
        <p>Ruby on Rails</p>
        <p>Python</p>
      </Container>
    </div>
  )
}
export default MyLanguages
