import React from 'react';

class Carousel extends React.Component {

  constructor( props ){
    super( props )
    this.state = {
      items: [
        {
          id: 0,
          title: "",
          subTitle: "",
          imgSrc: "",
          link: "",
          selected: false
        },
        {
          id: 1,
          title: "",
          subTitle: "",
          imgSrc: "",
          link: "",
          selected: false
        },
        {
          id: 2,
          title: "",
          subTitle: "",
          imgSrc: "",
          link: "",
          selected: false
        }
      ]

    }
  }

  handleCardClick = ( id, card ) => {
    let { items } = [...this.state.items]
    items[id].selected = items[id].selected ?  false : true
    items.forEach( item => {
      if( item.id !== id ){
         item.selected = false
      }
    })
    this.setState({ items })
  }

  render(){
    return(
      <div>
      Carousel
      </div>
    )
  }
}
export default Carousel
