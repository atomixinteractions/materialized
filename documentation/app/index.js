import React from 'react'
import ReactDOM from 'react-dom'
import RedBox from 'redbox-react'
import { AppContainer } from 'react-hot-loader'

import RootComponent from './root'
import baseStyles from './styles'

const rootPoint = document.createElement('div')
document.body.insertBefore(rootPoint, document.body.firstChild)

const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css?family=Noto+Sans:300,400,600,700&subset=cyrillic'
document.head.insertBefore(link, document.head.getElementsByTagName('title')[0])

baseStyles()

const render = Root => {
  try {
    ReactDOM.render((
      <AppContainer>
        <Root />
      </AppContainer>
    ), rootPoint)
  }
  catch(e) {
    ReactDOM.render(<RedBox error={e} />, rootPoint)
  }
}

render(RootComponent)

if (module.hot) {
  module.hot.accept('./root', () => {
    const NewApp = require('./root').default
    render(NewApp)
  })
}
