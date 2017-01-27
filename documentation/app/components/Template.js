import React from 'react'
import styled from 'styled-components'

import * as vars from '../styles/variables'
import TopBar from './TopBar'


const TemplateWrapper = styled.div`
  position: fixed;
  top: ${vars.headerHeight}px;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`

const Template = ({ children }) => (
  <TemplateWrapper>
    <TopBar />
    {children}
  </TemplateWrapper>
)

export default Template
