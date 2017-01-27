# Base layout

Dynamic align childs

## Props

| Name            | Type                | Default         | Description|
|:-----|:-----|:-----|:-----|
| `justifyContent` | `flexStart`<br/> `flexEnd`<br/> `center`<br/> `spaceAround`<br/> `spaceBetween` | | Distribute childs on horizontal axis
| `alignItems` | `flexStart`<br/> `flexEnd`<br/> `center`<br/> `baseline`<br/> `stretch` | | Position of child lines
| `padding` | `Number` | `0` | Inset padding to container (in px)
| `wrap` | `wrap`<br/> `nowrap`<br/> `wrapReverse`<br/> `initial` | `false` | It controls wrapping of elements in the overflowed line
| `marginBetween` | `Number` | `0` | Controls outset padding between childs
| `direction` | `column`<br/> `row` | `row` | Change direction of axis


## Example

```jsx
import React, { Component } from 'react'
import { Button, Layout, Row } from 'pattern-library/atoms'

export default class extends Component {
  state = { direction: 'row' }
  changeState = this.changeState.bind(this)

  changeState() {
    this.setState({
      direction: this.state.direction === 'row'
        ? 'column'
        : 'row'
    })
  }

  render() {
    return (
      <Layout direction={this.state.direction} justifyContent="spaceBetween" marginBetween={20}>
        <Row marginBetween={10}>
          <Button primary>Some button</Button>
          <Button bordered>Another button</Button>
        </Row>
        <Row>
          <Button warning onClick={this.changeState}>Change direction</Button>
        </Row>
      </Layout>
    )
  }
}

```
