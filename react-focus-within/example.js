import React from 'react'
import Stack from 'stack-styled'
import FocusWithin from 'react-simple-focus-within'
import Input from './components/Input'
import Button from './components/Button'

const Example1 = () => <FocusWithin>
    {({ focused, getRef }) => (
        <form>
            <fieldset
                ref={getRef}
                style={{
                    borderColor: focused ? 'blue' : '#999',
                    background: focused ? 'yellow' : 'transparent',
                }}
            >
                <legend
                    style={{ color: focused ? 'danger' : 'text' }}
                >
                    {focused ? 'Focus is inside' : 'No focus here'}
                </legend>
                <Stack>
                    <Input
                        type="text"
                        placeholder="Click to activate first input"
                    />
                    <Input
                        type="text"
                        placeholder="Use Tab to activate next input"
                    />
                    <Button type="submit">Submit</Button>
                </Stack>
            </fieldset>
        </form>
    )}
</FocusWithin>

export { Example1 }