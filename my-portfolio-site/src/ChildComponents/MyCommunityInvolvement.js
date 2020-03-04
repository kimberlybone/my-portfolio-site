import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import { TweenMax, Power3 } from 'gsap'


function MyCommunityInvolvement( props ){

  let myCommunityInvolvement = useRef(null)
  useEffect(() => {
    console.log(myCommunityInvolvement);
    TweenMax.to(
      myCommunityInvolvement,
      0.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: 1.6
      }
    )
  })

  return(
    <div>
      <Container className='right-what' ref={ elem => { myCommunityInvolvement = elem } }>
        <h3>Community Involvement</h3>
      </Container>
    </div>
  )
}
export default MyCommunityInvolvement
