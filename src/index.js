import React, { Component } from 'react'
import { render } from 'react-dom';

class App extends Component {
    render() {
        return (
         <h1> test </h1>
        )
    }
}

render(<App/>, document.getElementById('app'))