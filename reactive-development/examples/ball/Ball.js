import React from 'react'
import './Ball.css'

export default React.createClass({

    propTypes: {
        x: React.PropTypes.number.isRequired,
        y: React.PropTypes.number.isRequired,
        radius: React.PropTypes.number.isRequired
    },

    getStyles() {
        const {x, y, radius} = this.props
        return {
            transform: `translateX(${x}px) translateY(${y}px) translateZ(0)`,
            width: radius * 2,
            height: radius * 2
        }
    },

    render() {
        return (
            <div className="Ball" style={this.getStyles()}></div>
        )
    }
})
