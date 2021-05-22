import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'

function Footer(){

  return (
    <footer className="mt-1">
      <Container fluid={ true }>
        <Row className="justify-content-between p-1">
          <Col className="p-0" md={ 3 } sm={ 3 } style={{ width: '30%' }}>
          </Col>
          <Col className='p-1 d-flex justify-content-center' md={ 3 } sm={ 3 } style={{ width: '30%' }}>
            <SocialIcon url='https://github.com/kimberlybone'
                        bgColor='black'
                        className='social-icon'
                        style={{ height: 25, width: 25 }}/>

            <SocialIcon style={{ height: 25, width: 25 }}
                        bgColor='black'
                        url='https://www.linkedin.com/in/kimberly-bone-aa3952121/'/>

            <SocialIcon style={{ height: 25, width: 25 }}
                        bgColor='black'
                        className='social-icon' url='https://twitter.com/miss_kimB'/>

            <SocialIcon style={{ height: 25, width: 25 }}
                        className='social-icon' url='https://medium.com/@k_bone'/>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={ 3 } sm={ 3 } style={{ width: '30%', fontFamily: 'cursive' }}>
            Made with ♡
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer
