import React, { Component } from 'react'

export default class Mount extends Component {

    componentDidMount(){
        console.log('component mounted');
        
    }
  render() {
    return (
      <div>
        <p>components has been mounted</p>
      </div>
    )
  }
}
