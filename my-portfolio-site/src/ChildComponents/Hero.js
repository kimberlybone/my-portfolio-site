import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

function Hero( props ){
  return(
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={ true }>
        <Row className="justify-content-center py-5">
          <Col md={ 5 } sm={ 5 }>
          Welcome to my site 
          { props.title && <h1 className="display-1 font-weight-bold"> { props.title } </h1> }
          { props.subTitle && <h3 className="display-4 font-weight-light"> { props.subTitle } </h3> }
          { props.subText && <h3 className="lead font-weight-light"> { props.subText } </h3> }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}
export default Hero
