import React from 'react'
import BallApp from './ball/BallApp.js'

let App = React.createClass({
    render() {
        return <BallApp/>
        //null
        //return (
        //    <h1>Hello Adspired!</h1>
        //)

    }
})

document.addEventListener("DOMContentLoaded", function () {
    React.render(
        React.createElement(App),
        document.getElementById('app')
    )
})
