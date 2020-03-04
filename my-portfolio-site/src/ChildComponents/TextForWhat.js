import React from 'react'
import { Spring } from 'react-spring/renderprops'

class TextForWhat extends React.Component {
  render() {

    const otherInfoStyle = {
      background: 'white',
      color: '#f1c40f',
      padding: '1.5rem',
      textShadow: '0.5px 0.5px 1px #f1c40f',
      marginBottom: '600px',
      width: '100%',
      height: '400px',
      bottom: '-300px',
      zIndex: '-1'
    }

    return (
      <Spring
        from={{ opacity: 0, marginRight: -500, marginTop: 20 }}
        to={{ opacity: 1, marginRight: 0, marginTop: 20 }}
        config={{ delay: 2500, duration: 1000 }}
      >
        { props => (
          <div style={ props }>
            <div style={ otherInfoStyle }>
              <h2> <u>Fun Facts:</u> </h2>
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
