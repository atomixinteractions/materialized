import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

import Template from '../components/Template'

const Centerize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

const HomePage = () => (
  <Template>
    <Centerize>
      <Link to="/components">Show me your components</Link>
    </Centerize>
  </Template>
)

export default HomePage
