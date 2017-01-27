# Row Layout

Align all childs in a row

## Props

| Name            | Type                | Default         | Description|
|:-----|:-----|:-----|:-----|
| `justifyContent` | `flexStart`<br/> `flexEnd`<br/> `center`<br/> `spaceAround`<br/> `spaceBetween` | | Distribute childs on horizontal axis
| `alignItems` | `flexStart`<br/> `flexEnd`<br/> `center`<br/> `baseline`<br/> `stretch` | | Position of child lines
| `padding` | `Number` | `0` | Inset padding to container (in px)
| `wrap` | `wrap`<br/> `nowrap`<br/> `wrapReverse`<br/> `initial` | `false` | It controls wrapping of elements in the overflowed line
| `marginBetween` | `Number` | `0` | Controls outset padding between childs


## Example

```jsx
import React from 'react'
import { Row, Button } from 'pattern-library/atoms'

export default () => (
  <div>
    <Row>
      <Button>Button</Button> &nbsp;
      <Button primary>Button</Button> &nbsp;
    </Row>
    <br/>
    <Row justifyContent="spaceAround">
      <Button>Button</Button> &nbsp;
      <Button primary>Button</Button> &nbsp;
      <Button primary>Button</Button> &nbsp;
      <Button primary>Button</Button> &nbsp;
    </Row>
    <br/>
    <Row padding={10} marginBetween={20} justifyContent="flexEnd">
      <Button>Button</Button> &nbsp;
      <Button primary>Button</Button> &nbsp;
    </Row>
  </div>
)
```
