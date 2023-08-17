import React, { Component } from 'react'
import PurComp from './PurComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Joseph Onahi"
      }
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name: "Joseph Onahi"
            });
        }, 3000)
    }
  render() {
    console.log("Parent componnt")
    return (
      <div>I'm the parent
        <PurComp name = {this.state.name} />
        <RegComp name = {this.state.name} />
      </div>
    )
  }
}

export default ParentComp