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
  const enlarge = useSpring({ fontSize: isToggled ? '10em' : '7rem' })
  return(
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={ true }>
        <animated.div style={ fade }>
          <Row className="justify-content-center py-5">
            <Col md={ 5 } sm={ 5 }>
              {
                transitions.map( ({ item, props, key }) => <animated.div key={key} style={props}>{item.text}</animated.div>)
              }
              { props.title && <animated.h1 className="display-1 font-weight-bold"
                                            style={ enlarge }
                                            onMouseOver={ () => setToggle(!isToggled) }> { props.title } </animated.h1> }
              { props.subTitle && <h3 className="display-4 font-weight-light"> { props.subTitle } </h3> }
              { props.subText && <h3 className="lead font-weight-light"> { props.subText } </h3> }
            </Col>
          </Row>
        </animated.div>
      </Container>
    </Jumbotron>
  )
}
export default Hero
