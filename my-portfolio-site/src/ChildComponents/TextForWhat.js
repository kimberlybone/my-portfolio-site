import React from 'react'
import { Spring } from 'react-spring/renderprops'

class TextForWhat extends React.Component {
  render() {

    const otherInfoStyle = {
      background: '#ffe6ff',
      color: 'black',
      padding: '1.5rem',
      textShadow: '0px 0px 0px #00000'
    }

    return (
      <Spring
        from={{ opacity: 0, marginRight: -500, marginTop: 20 }}
        to={{ opacity: 1, marginRight: 0, marginTop: 20 }}
        config={{ delay: 1500, duration: 1000 }}
      >
        { props => (
          <div style={ props }>
            <div style={ otherInfoStyle }>
              <h4> Fun Facts: </h4>
              <li> I speak Spanish</li>
              <li> I studied and volunteered abroad in Costa Rica</li>
              <li> I'm always eager to learn new things </li>
            </div>
          </div>
        )}
      </Spring>
    )
  }
}

export default TextForWhat
