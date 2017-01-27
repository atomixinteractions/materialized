import React from 'react'
import { Router, Route, useRouterHistory } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import { ThemeProvider } from 'styled-components'
import { light } from 'pattern-library/themes'

import HomePage from './layout/Home'
import MainPage from './layout/Main'
import SetupPage from './layout/Setup'


const App = () => (
  <ThemeProvider theme={light}>
    <Router history={useRouterHistory(createHashHistory)()}>
      <Route path='/' component={HomePage} />
      <Route path="/setup" component={SetupPage} />
      <Route path='/components' component={MainPage}>
        <Route path=":component" />
      </Route>
    </Router>
  </ThemeProvider>
)

export default App
