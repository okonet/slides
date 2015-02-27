import React from 'react'
import Ball from './Ball.js'

let BallApp = React.createClass({

    getInitialState() {
        return {
            time: 0,
            width: 0,
            height: 0
        }
    },

    componentDidMount() {
        let rect = document.body.getBoundingClientRect()
        this.setState({
            width: rect.width,
            height: rect.height,
        })
    },

    componentWillUnmount() {
        window.cancelAnimationFrame(this.raf)
    },

    componentDidUpdate() {
        // Schedule next frame
        this.play()
    },

    tick() {
        this.setState({
            time: Date.now()
        })
    },

    reset() {
        this.stop()
        this.setState({
            time: 0
        })
    },

    stop() {
        window.cancelAnimationFrame(this.raf)
    },

    play() {
        this.stop()
        this.raf = window.requestAnimationFrame(this.tick)
    },

    render() {
        let {time, width, height}= this.state

        return (
            <div>
                <section style={{position: 'absolute'}}>
                    <button onClick={this.reset}>Reset</button>
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.play}>Play</button>
                </section>
                <Ball
                    time={time}
                    windowWidth={width}
                    windowHeight={height}
                />
            </div>
        )
    }
})

export default BallApp




