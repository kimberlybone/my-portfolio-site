import React from 'react';
import Hero from '../ChildComponents/Hero'


function WhoIAmPage( props ){
  return(
    <div>
      <Hero title={ props.title } subTitle={ props.subTitle } subText={ props.subText }></Hero>
    </div>
  )
}
export default WhoIAmPage
