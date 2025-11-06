import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <button onClick={this.props.greetHandler}>
        click to greet parent
      </button>
    )
  }
}
class Props extends Component {
  greetParent = () => {
    alert("Hello from child component");
  };

render(){
  return (
    <div>
      <h2>Props Example</h2>
      <child greetHandler={this.greetParent} />
    </div>
  )
}
}
export default Props;
