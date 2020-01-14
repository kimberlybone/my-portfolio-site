import React from 'react';

function Card ( props ){

    return(
      <div>
        <img className="" src={ props.item.imgSrc } alt="image"/>
      </div>
    )

}
export default Card
