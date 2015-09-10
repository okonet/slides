import React from 'react'
import Ball from './Ball.js'

export default React.createClass({

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
        this.play() // Schedule next frame
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

    getPositionForTime(x1, y1, radius, time) {
        const dt = time / 1000
        const xMax = this.state.width - radius * 2 - 2
        const yMax = this.state.height - radius * 2 - 2

        let x = x1 + Math.sin(dt) * 150
        let y = y1 + Math.cos(dt) * 150

        x = Math.min(x, xMax)
        x = Math.max(x, 0)

        y = Math.min(y, yMax)
        y = Math.max(y, 0)

        return {x, y}
    },

    render() {
        const {time, width, height}= this.state
        const balls = [
            {x: 0, y: 0, radius: 20}
        ]

        return (
            <div>
                <section style={{position: 'absolute'}}>
                    <button onClick={this.reset}>Reset</button>
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.play}>Play</button>
                </section>
                {
                    balls.map(ball => {
                        const {x, y} = this.getPositionForTime(ball.x, ball.y, ball.radius, time)
                        return <Ball
                            x={x}
                            y={y}
                            radius={ball.radius}
                        />
                    })
                }
            </div>
        )
    }
})





