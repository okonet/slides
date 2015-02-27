import React from 'react'
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin'
require('./Ball.css')

let Ball = React.createClass({

    mixins: [PureRenderMixin],

    propTypes: {
        windowWidth: React.PropTypes.number.isRequired,
        windowHeight: React.PropTypes.number.isRequired,
    },

    getInitialState() {
        return {
            x: 100,
            y: 100,
            radius: 50
        }
    },

    componentWillReceiveProps(props) {
        const t2 = props.time
        const t1 = this.props.time
        if (t2 === 0) {
            this.setState(this.getInitialState())
        } else {
            let {x,y} = this.getPositionForTime(this.state.x, this.state.y, t1, t2)
            this.setState({
                x: x,
                y: y,
                radius: 50
            })
        }
    },

    getPositionForTime(x1, y1, t1, t2) {
        const dt = t2 /1000
        const xMax = this.props.windowWidth - this.state.radius * 2 - 2
        const yMax = this.props.windowHeight - this.state.radius * 2 - 2

        console.log(Math.sin(1/dt));
        let x = x1 + Math.sin(dt) * 1
        let y = y1 + Math.cos(dt) * 1

        x = Math.min(x, xMax)
        x = Math.max(x, 0)

        y = Math.min(y, yMax)
        y = Math.max(y, 0)

        return {x, y}
    },

    getStyles(state) {
        return {
            transform: `translateX(${state.x}px) translateY(${state.y}px) translateZ(0)`,
            width: state.radius * 2,
            height: state.radius * 2,
        }
    },

    render() {
        const styles = this.getStyles(this.state)
        return (
            <div className="Ball" style={styles}></div>
        )
    }
})

export default Ball
