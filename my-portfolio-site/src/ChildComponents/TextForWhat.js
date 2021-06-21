import React from 'react'
import { Spring } from 'react-spring/renderprops'

class TextForWhat extends React.Component {
  render() {

    const otherInfoStyle = {
      color: '#080808',
      padding: '100px 100px',
      textShadow: '0.5px 0.5px 1px #f1c40f',
      marginBottom: '400px',
      width: '100%',
      height: '400px',
      bottom: '-300px',
      zIndex: '-1'
    }

    return (
      <Spring
        from={{ opacity: 0, marginRight: -500, marginTop: 20 }}
        to={{ opacity: 1, marginRight: 0, marginTop: 20 }}
        config={{ delay: 2500, duration: 500 }}
      >
        { props => (
          <div style={ props }>
            <div style={ otherInfoStyle }>
              <h2> <u>A little about me:</u> </h2>
              <li> I graduated with a major in Spanish Language and Literature which led me to study and volunteer abroad in Costa Rica.</li>
              <li> I am an explorer with a strong curiosity about the world. </li>
              <li><a href="/Users/kimberlybone/dev-folder/portfolio/my-portfolio-site/src/Assets/kim10.jpeg" download>Click to download my resume!</a></li>
            </div>
          </div>
        )}
      </Spring>
    )
  }
}

export default TextForWhat
