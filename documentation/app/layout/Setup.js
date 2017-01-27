import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

import Template from '../components/Template'
import Markdown from '../components/Markdown'
import SetupPageContent from '../docs/SetupPage'


const SetupPage = () => (
  <Template>
    <Markdown fullsized content={SetupPageContent} />
  </Template>
)

export default SetupPage
