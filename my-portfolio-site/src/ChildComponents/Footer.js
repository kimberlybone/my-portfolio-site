import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'

function Footer(){

  return (
    <footer className="mt-5">
      <Container fluid={ true }>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={ 3 } sm={ 3 } style={{ width: '30%' }}>
          </Col>
          <Col className='p-1 d-flex justify-content-center' md={ 3 } sm={ 3 } style={{ width: '30%' }}>
            <SocialIcon url='https://github.com/kimberlybone'
                        bgColor='lightgreen'
                        className='social-icon'
                        style={{ height: 25, width: 25 }}/>
            <SocialIcon style={{ height: 25, width: 25 }}
                        url='https://www.linkedin.com/in/kimberly-bone-aa3952121/'/>
            <SocialIcon style={{ height: 25, width: 25 }}
                        className='social-icon' url='https://twitter.com/miss_kimB' bgColor='#ff5a01'/>
            <SocialIcon style={{ height: 25, width: 25 }}
                        className='social-icon' url='https://medium.com/@k_bone'/>
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={ 3 } sm={ 3 } style={{ width: '30%' }}>
            Made with ♡
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer
