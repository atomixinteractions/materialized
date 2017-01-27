import React from 'react'
import styled, { css } from 'styled-components'
import { Link as RLink } from 'react-router'
import * as vars from '../styles/variables'


const Panel = styled.aside`
  display: flex;
  flex-shrink: 0;
  flex-flow: column nowrap;
  align-items: stretch;
  overflow-x: auto;
  width: ${vars.sidePanelWidth}px;
  background-color: #f5f7f8;
  border-right: 1px solid #e2e4e7;
  padding-bottom: 40px;
`

const Category = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-flow: column nowrap;
  margin-top: 10px;
`

const Title = styled.div`
  display: flex;
  flex-shrink: 0;
  font-size: 18px;
  font-weight: 700;
  padding: 12px 12px;
`

const Link = styled(RLink)`
  display: block;
  flex-shrink: 0;
  font-size: 14px;
  color: black;
  text-decoration: none;
  padding: 8px 0;
  padding-left: 20px;
  border-left: 4px solid transparent;

  &:hover {
    background-color: #e2e4e7;
  }

  &.active {
    border-left-color: ${vars.primaryColor};
    color: ${vars.primaryColor};
  }

  ${props => props['data-unimplemented'] && css`
    color: rgba(0,0,0,.5);
    cursor: default;
    &::after {
      content: 'unimplemented';
      font-size: 12px;
      background-color: #d2d2d2;
      margin-left: 10px;
      line-height: 16px;
      padding: 0 6px;
      border-radius: 3px;
    }
    &:hover{
      background-color: transparent;
    }
  `}
`

const ComponentsPanel = (props) => (
  <Panel>
    <Link to="/components">All components</Link>
    <Category>
      <Title>Atoms</Title>
      <Link activeClassName="active" to="/components/button">Button</Link>
      <Link activeClassName="active" to="/components/row">Row</Link>
      <Link activeClassName="active" to="/components/column">Column</Link>
      <Link activeClassName="active" to="/components/layout">Layout</Link>
      <Link activeClassName="active" data-unimplemented>Input</Link>
      <Link activeClassName="active" data-unimplemented>Paper</Link>
      <Link activeClassName="active" data-unimplemented>Switch</Link>
      <Link activeClassName="active" data-unimplemented>DropDown</Link>
      <Link activeClassName="active" data-unimplemented>Slider</Link>
      <Link activeClassName="active" data-unimplemented>Pill</Link>
    </Category>
    <Category>
      <Title>Molecules</Title>
      <Link activeClassName="active" data-unimplemented>Calendar</Link>
    </Category>
    <Category>
      <Title>Organisms</Title>
      <Link activeClassName="active" data-unimplemented>DateTimePicker</Link>
    </Category>
  </Panel>
)

export default ComponentsPanel
