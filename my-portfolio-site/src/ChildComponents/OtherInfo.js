import React from 'react'
import { Spring } from 'react-spring/renderprops'


class OtherInfo extends React.Component {
  render() {

    const otherInfoStyle = {
      background: '#ffe6ff',
      color: 'black',
      padding: '1.5rem',
      textShadow: '0px 1px 0px #00000'
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
              <h4> Fun Fact: </h4>
              <p> - I am bilingual (I speak Spanish).
                    I traveled to Costa Rica and loved it so much that I went back a second time.
                    The first time to volunteer and the second time to study abroad.
                    Both times I stayed with at least 2 different families where they taught us how to live like a Costa Rican. </p>
              <p> - I'm always eager to learn new things. </p>
            </div>
          </div>
        )}
      </Spring>
    )
  }
}

export default OtherInfo
