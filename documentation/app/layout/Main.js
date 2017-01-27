import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

import { Button } from 'pattern-library'
import ComponentsPanel from '../components/ComponentsPanel'
import Template from '../components/Template'
import ComponentViewer from '../components/ComponentViewer'

const MainLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
`

const ScrolledContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow-x: auto;
  flex-grow: 1;
`

const MainPage = (props) => (
  <Template>
    <MainLayout>
      <ComponentsPanel />
      <ScrolledContent>
        <ComponentViewer component={props.params.component} />
      </ScrolledContent>
    </MainLayout>
  </Template>
)

export default MainPage
