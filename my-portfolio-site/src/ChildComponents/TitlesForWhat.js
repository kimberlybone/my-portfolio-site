import React from 'react';
import { Spring } from 'react-spring/renderprops'

function TitlesForWhat(){

  const infoStyle = {
    background: '#ffe6ff',
    color: 'black',
    padding: '1.5rem',
    textShadow: '0px 0px 0px #000000'
  }

  return(
    <Spring
      from={{ opacity: 0, marginLeft: -500 }}
      to={{ opacity: 1, marginLeft: 0 }}
      config={{ delay: 500, duration: 1000 }}

    >
      { props => (
        <div style={ props } >
          <div style={ infoStyle }>
            <h4> Name: </h4>
              <p>  Kimberly Bone </p>
            <h4> Education: </h4>
              <li>  University of North Carolina at Greensboro (May 2019) </li>
              <li>  Flatiron School's coding bootcamp (November 2019).</li>
            <h4> Hobbies: </h4>
              <li>  Cooking </li>
              <li>  Traveling </li>
              <li>  Photography </li>
              <li>  Inspiring other women of color </li>
          </div>
        </div>
      )}
    </Spring>
  )
}
export default TitlesForWhat
