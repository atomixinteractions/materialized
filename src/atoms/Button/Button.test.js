import React from 'react'
import { ThemeProvider } from 'styled-components'
import { shallow, mount } from 'enzyme'

jest.dontMock('./Button')

import Button from './Button'
import { SphereTheme } from '../../themes'


describe('<Button />', () => {
  it('default render', () => {
    const com = shallow(<Button>default</Button>)

    expect(com.text()).toBe('default')
  })

  it('wide', () => {
    const com = shallow(<Button wide>wide button</Button>)

    expect(com.text()).toBe('wide button')
  })

  it('clickable', () => {
    const onClick = jest.fn()
    const com = mount(<Button onClick={onClick}>example</Button>)
    com.find('button').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('primary', () => {
    const com = mount(
      <ThemeProvider theme={SphereTheme}>
        <Button primary>default</Button>
      </ThemeProvider>
    )

    expect(com.text()).toBe('default')
  })
})
