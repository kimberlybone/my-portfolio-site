import React from 'react';
import { Spring } from 'react-spring/renderprops'

function TitlesForWhat( ){

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
              <p>  University of North Carolina at Greensboro c/o May 2019 | Flatiron School's coding bootcamp c/o November 2019.</p>
            <h4> Hobbies: </h4>
              <p>  Cooking, volunteering, photography, and inspiring other women of color </p>
          </div>
        </div>
      )}
    </Spring>
  )
}
export default TitlesForWhat
