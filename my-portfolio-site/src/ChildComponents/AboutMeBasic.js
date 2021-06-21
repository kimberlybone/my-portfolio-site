import React from 'react';
import { Spring } from 'react-spring/renderprops'

function TitlesForWhat(){

  const infoStyle = {
    padding: '100px 0',
    textShadow: '0.5px 0.5px 1px #f1c40f',
    marginBottom: '500px',
    height: '600px',
    minHeight: '600px',
    position: 'relative',
    zIndex: '1'
  }

  return(
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 500, duration: 1000 }}

    >
      { props => (
        <div style={ props } >
          <div style={ infoStyle }>
            <h2> <u> Name: </u>  </h2>
              <p>  Kimberly Bone </p>
            <h2> <u> Education: </u>  </h2>
              <p>
                <li>  Flatiron School's coding bootcamp</li>
                <li>  University of North Carolina at Greensboro</li>
              </p>
            <h2> <u> Hobbies: </u>  </h2>
              <li>  Cooking </li>
              <li>  Traveling </li>
              <li>  Photography </li>
          </div>
        </div>
      )}
    </Spring>
  )
}
export default TitlesForWhat
