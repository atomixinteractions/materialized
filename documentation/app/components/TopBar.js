import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

import * as vars from '../styles/variables'

const BasePanel = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${vars.headerHeight}px;
  justify-content: space-between;
  align-items: stretch;
  background-color: ${vars.primaryColor};
  color: white;
  padding: 0 14px;
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 24px;
  letter-spacing: 0.5px;
  color: white;
  text-decoration: none;
`

const Navigation = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;

  > a+a {
    margin-left: 10px;
  }
`

const NavLink = styled(Link)`
  display: flex;
  color: white;
  text-decoration: none;
  align-items: center;
  padding: 0 6px;
  border-bottom: 3px solid transparent;
  margin-top: 3px;
  font-size: 16px;

  &.active {
    border-bottom-color: ${vars.accentColor}; /* material.blue[300] */
  }
`

const TopBar = (props) => (
  <BasePanel>
    <Logo to="/">Material.UI</Logo>
    <Navigation>
      <NavLink to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/setup" activeClassName="active">Setup</NavLink>
      <NavLink to="/components" activeClassName="active">Components</NavLink>
    </Navigation>
  </BasePanel>
)

export default TopBar
