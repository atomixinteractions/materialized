# Button

Simple button

## > Should be rewrited <

## Props

| Name            | Type                | Default         | Description|
|:-----|:-----|:-----|:-----|
| `wide` | `Boolean` | `false` | Make button full width of container
| `primary` | `Boolean` | `false` | |
| `success` | `Boolean` | `false` | |
| `warning` | `Boolean` | `false` | |
| `danger` | `Boolean` | `false` | |
| `bordered` | `Boolean` | `false` | |
| `loading` | `Boolean` | `false` | |  |


## Example

```jsx
import React from 'react'
import { Button, Row } from 'pattern-library/atoms'

export default () => (
  <Row marginBetween={10} justifyContent="spaceBetween">
    <Button>Default</Button>
    <Button primary>Primary</Button>
    <Button success>Success</Button>
    <Button warning>Warning</Button>
    <Button danger>Danger</Button>
    <Button bordered>Bordered</Button>
    <Button loading>Loading</Button>
  </Row>
)
```
