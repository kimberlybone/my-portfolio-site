import React from 'react';
import { Spring } from 'react-spring/renderprops'

function MyBasicInfo( ){

  const infoStyle = {
    background: 'red',
    color: 'white',
    padding: '1.5rem'
  }

  return(
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
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
export default MyBasicInfo
