# Column Layout

Align all childs in a column

## Props

| Name            | Type                | Default         | Description|
|:-----|:-----|:-----|:-----|
| `justifyContent` | `flexStart`<br/> `flexEnd`<br/> `center`<br/> `spaceAround`<br/> `spaceBetween` | | Distribute childs on vertical axis
| `alignItems` | `flexStart`<br/> `flexEnd`<br/> `center`<br/> `baseline`<br/> `stretch` | | Position of childs
| `padding` | `Number` | `0` | Inset padding to container (in px)
| `marginBetween` | `Number` | `0` | Controls outset padding between childs


## Example

```jsx
import React from 'react'
import { Column, Button, Row } from 'pattern-library/atoms'

export default () => (
  <div>
    <Column>
      <Button>Button</Button>
      <Button primary>Button</Button>
    </Column>
    <br/>
    <Column justifyContent="center">
      <Row justifyContent="spaceAround">
        <Button>Button</Button>
        <Button primary>Button</Button>
      </Row>
      <Row>
        <Button primary wide>Button</Button>
        <Button primary wide>Button</Button>
      </Row>
    </Column>
    <br/>
    <Column padding={10} marginBetween={20} justifyContent="flexEnd">
      <Button>Button</Button>
      <Button primary>Button</Button>
    </Column>
  </div>
)
```
