import React, { PureComponent } from 'react'

class PurComp extends PureComponent {
  render() {
    return (
      <div>I'm the pure component {this.props.name}</div>
    )
  }
}

export default PurComp