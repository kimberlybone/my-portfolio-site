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
          imgSrc: "https://www.diabetes.org/sites/default/files/styles/crop_large/public/2019-06/Healthy%20Food%20Made%20Easy%20-min.jpg",
          link: "https://github.com/kimberlybone/moodfood-frontend",
          selected: false
        },
        {
          id: 1,
          title: "Happy Hour",
          subTitle: "",
          imgSrc: "https://www.bestwesternva.com/wp-content/uploads/sites/67/2019/02/happy-hour-sign.jpg",
          link: "https://github.com/kimberlybone/happy-hour-frontend",
          selected: false
        },
        {
          id: 2,
          title: "Health On the Go",
          subTitle: "",
          imgSrc: "https://revcycleintelligence.com/images/site/article_headers/_normal/2017-12-12-patient-care.png",
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
