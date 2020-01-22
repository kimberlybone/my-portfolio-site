import React from 'react'
import { Spring } from 'react-spring/renderprops'


class OtherInfo extends React.Component {
  render() {
    
    const infoStyle = {
      background: 'red',
      color: 'white',
      padding: '1.5rem'
    }

    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        { props => (
          <div style={ props }>
            <div style={ infoStyle }>
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
