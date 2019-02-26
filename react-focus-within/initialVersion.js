import React from 'react'
import PropTypes from 'prop-types'

const noOutlineStyles = {
    outline: 'none'
}

class FocusWithin extends React.Component {
    state = {
        focused: false
    }

    ref = React.createRef()

    /**
     * Calls `focus` method on the container node
     *
     * @public
     * @method focus
     * */
    focus() {
        const node = this.ref.current
        if (node != null && typeof node.focus === 'function') {
            node.focus()
        }
    }

    onFocus = evt => {
        const { onFocus } = this.props
        const { focused } = this.state

        // TODO: Figure out if this check is "safe" or we should rely on SCU instead
        if (!focused) {
            this.setState(
                {
                    focused: true
                },
                () => {
                    onFocus(evt)
                }
            )
        }
    }

    onBlur = evt => {
        const { onBlur } = this.props
        const { focused } = this.state

        // Do not blur if focus within the container or we're editing
        if (this.isFocusWithin(this.ref.current)) {
            evt.preventDefault()
            evt.stopPropagation()
            return
        }

        // Persist event object
        evt.persist()

        if (focused) {
            this.setState(
                {
                    focused: false
                },
                () => {
                    onBlur(evt)
                }
            )
        }
    }

    isFocusWithin = node => {
        return !!node.parentNode.querySelector(':focus-within')
    }

    render() {
        const { children } = this.props
        const { focused } = this.state

        if (typeof children === 'function') {
            return React.cloneElement(
                children({
                    focused,
                    getRef: this.ref
                }),
                {
                    onFocus: this.onFocus,
                    onBlur: this.onBlur
                }
            )
        }

        return (
            <div ref={this.ref} onFocus={this.onFocus} onBlur={this.onBlur} style={noOutlineStyles}>
                {children}
            </div>
        )
    }
}

FocusWithin.propTypes = {
    /**
     * Function has the following signature:
     * `({ focused: Boolean, getRef: Function }) => React.Element`
     */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
}

FocusWithin.defaultProps = {
    onBlur: () => {},
    onFocus: () => {}
}

export default FocusWithin