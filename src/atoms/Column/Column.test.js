import React from 'react'
import { mount } from 'enzyme'

jest.dontMock('./Column')

import Column from './Column'

describe('<Column />', () => {
  it('Simple render', () => {
    const com = mount(<Column />)
    expect(com.text()).toBe('')
  })

  it('With single content', () => {
    const com = mount(<Column>text</Column>)
    expect(com.text()).toBe('text')
  })

  it('justifyContent, marginBetween and padding', () => {
    const com = mount(<Column justifyContent="spaceAround" marginBetween={10} padding={15}>text</Column>)
    expect(com.text()).toBe('text')
  })

  it('marginBetween="5em"', () => {
    const com = mount(<Column marginBetween="5em">text</Column>)
    expect(com.text()).toBe('text')
  })
})
