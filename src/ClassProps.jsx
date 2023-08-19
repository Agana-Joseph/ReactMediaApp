import React, { Component } from 'react'

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>Hello Joseph {this.props.name}! Welcome to React props @ Simplilearn</h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default ClassProps