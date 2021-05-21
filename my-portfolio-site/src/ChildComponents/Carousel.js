import React from 'react';
import Card from '../ChildComponents/Card'
import { Container, Row } from 'react-bootstrap'

class Carousel extends React.Component {

    state = {
      items: [
        {
          id: 0,
          title: "MoodFood",
          subTitle: "",
          imgSrc: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/301506_2200-800x1200.jpg",
          link: "https://github.com/kimberlybone/moodfood-frontend",
          demo: "https://youtu.be/Nt9wXFrjiwA",
          selected: false
        },
        {
          id: 1,
          title: "Happy Hour",
          subTitle: "",
          imgSrc: "https://www.bestwesternva.com/wp-content/uploads/sites/67/2019/02/happy-hour-sign.jpg",
          link: "https://github.com/kimberlybone/happy-hour-frontend",
          demo: "https://youtu.be/nJ420s7Z0cw",
          selected: false
        },
        {
          id: 2,
          title: "Health On the Go",
          subTitle: "",
          imgSrc: "https://sneakers4funds.com/wp-content/uploads/2019/10/healthy-food-1024x1024.jpg",
          link: "https://github.com/kimberlybone/Health-on-the-go",
          selected: false
        }
      ]

    }

  handleCardClick = ( id ) => {
    let items = [...this.state.items]

    items[id].selected = items[id].selected ?  false : true
    items.forEach( item => {
      if( item.id !== id ){
         item.selected = false
      }
    })
    this.setState({ items })
  }

  makeItems = ( items ) => {
    return items.map( item => {
      return <Card item={ item } onClick={( e => this.handleCardClick(item.id, e) )} key={ item.id }/>
    })
  }


  render(){
    const { items } = this.state

    return(
      <Container fluid={ true }>
        <Row className="justify-content-around">
        { this.makeItems(items) }
        </Row>
      </Container>
    )

  }
}
export default Carousel
