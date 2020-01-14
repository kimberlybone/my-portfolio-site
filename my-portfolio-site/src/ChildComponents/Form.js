import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

class Form extends React.Component{
  constructor( props ){
    super(props)
    this.state = { 

    }
  }
  render(){

    return(
      <Container fluid={ true }>
        <Row className="justify-content-center">

          <Col md={ 5 } >
          </Col>

        </Row>
      </Container>
    )
  }
}
export default Form
