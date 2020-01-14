import React from 'react';

function WelcomePage( props ){
  return(
    <div>
      <p>{ props.title }</p>
      <p>{ props.subtitle }</p>
    </div>
  )
}
export default WelcomePage
