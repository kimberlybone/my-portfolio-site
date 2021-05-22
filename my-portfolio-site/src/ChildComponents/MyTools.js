import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import { TweenMax, Power3 } from 'gsap'


function MyTools( props ){

  let myTools = useRef(null)
  useEffect(() => {
    console.log(myTools);
    TweenMax.to(
      myTools,
      0.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: 1.0
      }
    )
  })

  return(
    <div>
      <Container className='right-what' ref={ elem => { myTools = elem } }>
        <h3>Tools</h3>
        <p>BluePrism</p>
        <p>CSS</p>
        <p>ReactJS (React Hooks, Redux)</p>
        <p>Ruby on Rails</p>
        <p>styled-components</p>
        <p>Storybook</p>
        <p>Github</p>
        <p>Natural Language Proceessing</p>
      </Container>
    </div>
  )
}
export default MyTools
