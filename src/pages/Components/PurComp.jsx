import React, { PureComponent } from 'react'

class PurComp extends PureComponent {
  render() {
    console.log("Pure component")
    return (
      <div>I'm the pure component {this.props.name}</div>
    )
  }
}

export default PurComp