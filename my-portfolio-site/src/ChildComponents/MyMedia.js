import React, { useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import { TweenMax, Power3 } from 'gsap'


function MyMedia( props ){

  let myMedia = useRef(null)
  useEffect(() => {
    console.log(myMedia);
    TweenMax.to(
      myMedia,
      0.8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: 0.3
      }
    )
  })

  return(
    <div>
      <Container className='h3-what' ref={ elem => { myMedia = elem } }>
        <h3>Media</h3>
        <p><a href="https://medium.com/datadriveninvestor/nutrition-meets-artificial-intelligence-b15847d6cc19?source=friends_link&sk=4f62c29ebede52b76b42547149f0ccc4">Nutrition Meets Artificial Intelligence Part 1</a></p>
        <p><a href="https://medium.com/@k_bone/nutrition-meets-artificial-intelligence-part-ii-b45f4a000db6?source=friends_link&sk=797b3b6ef097babe8dc31dd4b6897039">Nutrition Meets Artificial Intelligence Part 2</a></p>
        <p><a href="https://medium.com/swlh/object-orientation-in-javascript-ad25e9e469b7?source=friends_link&sk=ffabe8fdbdc3d86d18dd64945822668b">Object-Orientation in JavaScript</a></p>
        <p><a href="https://medium.com/swlh/a-glance-at-hooks-aa06027b6b9e?source=friends_link&sk=54260298a91a94b03bd6eff2ae3d4ade">React Hooks</a></p>
        <p><a href="https://medium.com/@k_bone/installing-and-understanding-sass-f2cdc15f278a?source=friends_link&sk=5bd02b148f59fc8987928ed117c95deb">Installing and Understanding SASS</a></p>
      </Container>
    </div>
  )
}
export default MyMedia
