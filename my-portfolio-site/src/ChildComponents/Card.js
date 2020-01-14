import React from 'react';
import CardInfo from '../ChildComponents/CardInfo'

function Card ( props ){

  const { item } = props

    return(
      <div className="k-card">
        <img className="k-card-image" src={ item.imgSrc } alt="image"/>
        { item.selected && <CardInfo title={ item.title } subTitle={ item.subTitle } link={ item.link }/>  }
      </div>
    )

}
export default Card
