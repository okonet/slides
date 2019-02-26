import { darken, transparentize } from 'polished'

/**
 * Mixin to generate consistent box-shadow rule for focus rings and selections
 */
export function focusBoxShadow(
    color,
    hasInset = false,
) {
    return {
        boxShadow: `
        0 0 0 0.2em ${transparentize(0.75, color)}
        ${hasInset ? `, 0 0 0 1px ${color} inset` : ''}
        `,
    }
}

/**
 * Mixin to add an alternative focus ring to interactive elements.
 * It removes the default focus outline.
 *
 * @example
 * styled.div`
 *   &:focus {
 *     ${focusRing('red')}
 *   }
 * `
 */
export function focusRing(color, disabled = false) {
    if (disabled) {
        return {
            outline: 'none',
        }
    }
    return {
        outline: 'none',
        borderColor: darken(0.1, color),
        ...focusBoxShadow(color),
    }
}