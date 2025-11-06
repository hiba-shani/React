import React, { Component } from 'react'

export default class Unmount extends Component {

    state = {
        time: 0
    }

    componentDidMount() {
        // statrt timer when the component mount
        this.timer = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time + 1
            }))
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Timer cleaned up.");
        
    }
    render() {
        return (
            <div>
                <h1>time: {this.state.time} seconds</h1>
            </div>
        )
    }
}
