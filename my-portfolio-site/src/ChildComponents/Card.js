import React from 'react';
import CardInfo from '../ChildComponents/CardInfo'

function Card ( props ){

  const { item } = props

    return(
      <div>
        <img className="" src={ item.imgSrc } alt="image"/>
        { item.selected && <CardInfo title={ item.title } subTitle={ item.subTitle } link={ item.link }/>  }
      </div>
    )

}
export default Card
