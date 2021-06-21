import React, { useState } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import { useSpring, useTransition, animated } from 'react-spring'


function Hero( props ){
  const [ items, set ] = useState([...props.title])

  const transitions = useTransition( items, item => item.key, {
    from: { transform: 'translate3d( 0, -40px, 0 )'},
    enter: { transform: 'translate3d( 0, 0px, 0 )'},
    leave: { transform: 'translate3d( 0,-40px,0 )' }
  })
  const [ isToggled, setToggle ] = useState(false)
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } })
  const colorChange = useSpring({ color: isToggled ? '#f1c40f' : '#f1c40f' })
  return(
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={ true }>
        <animated.div style={ fade } className='hero'>
          <Row className="justify-content-center py-5">
            <Col md={ 10 } sm={ 10 } style={{margin: '110px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              {
                transitions.map( ({ item, props, key }) => <animated.div key={key} style={props}>{item.text}</animated.div>)
              }
              { props.title && <animated.h1 className="display-1 font-weight-bold"
                                            style={{ color: 'black', border: 'white', borderRadius: '7px', display: 'inline-block' }}
                                            onMouseLeave={ () => setToggle(!isToggled) }> { props.title } </animated.h1> }
              { <h1 className="blinking-cursor"></h1> }
              { <p></p> }
              { props.subTitle && <h3 className="display-5 font-weight-bold"
                                      style={{ color: '#f1c40f', fontFamily: "Courier New"}}> { props.subTitle } </h3> }
              { props.subText && <h3 className="lead font-weight-light"
                                      style={{ fontStyle: "italic", borderStyle: "solid", textAlign: "center" }}> { props.subText } </h3> }
            </Col>
          </Row>
        </animated.div>
      </Container>
    </Jumbotron>
  )
}
export default Hero
