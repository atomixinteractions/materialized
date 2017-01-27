import React from 'react'
import { ThemeProvider } from 'styled-components'
import { shallow, mount } from 'enzyme'

jest.dontMock('./Input')

import Input from './Input'
import { SphereTheme } from '../../themes'


describe('<Input />', () => {
  it('default render', () => {
    const com = shallow(<Input>default</Input>)

    expect(com.text()).toBe('default')
  })

  it('wide', () => {
    const com = shallow(<Input wide>wide button</Input>)

    expect(com.text()).toBe('wide button')
  })

  it('clickable', () => {
    const onClick = jest.fn()
    const com = mount(<Input onClick={onClick}>example</Input>)
    com.find('button').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('primary', () => {
    const com = mount(
      <ThemeProvider theme={SphereTheme}>
        <Input primary>default</Input>
      </ThemeProvider>
    )

    expect(com.text()).toBe('default')
  })
})
