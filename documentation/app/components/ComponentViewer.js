import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

import Markdown from './Markdown'
import ComponentsPageDocs from '../docs/ComponentsPage'
import collection from '../collection'
import Playground from './Playground'


export default class ComponentViewer extends Component {
  static propTypes = {
    component: PropTypes.string,
  }

  editors = []

  getMarkdown() {
    return this.props.component
      ? collection[this.props.component].page
      : ComponentsPageDocs
  }

  componentWillUpdate(nextProps) {
    if (nextProps.component !== this.props.component) {
      this.dropEditors()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.component !== this.props.component) {
      this.createEditors()
    }

    if (process.env.NODE_ENV === 'development') {
      this.dropEditors()
      this.createEditors()
    }
  }

  componentDidMount() {
    this.createEditors()
  }

  componentWillUnmount() {
    this.dropEditors()
  }

  dropEditors() {
    if (this.editors) {
      this.editors.forEach(editorNode => {
        try {
          ReactDOM.unmountComponentAtNode(editorNode)
        }
        catch (e) {
          console.error('Unmounting playground error:', e)
        }
      })
    }
  }

  createEditors() {
    const list = Array.from(this.mdc.getElementsByClassName('lang-jsx'))

    this.editors = list.forEach(item => {
      const sourceCode = item.innerText
      const mountPoint = document.createElement('div')

      item.parentNode.parentNode.replaceChild(mountPoint, item.parentNode)

      ReactDOM.render(<Playground sourceCode={sourceCode} />, mountPoint)
      return mountPoint
    })
  }

  render() {
    const docs = this.getMarkdown()

    return (
      <div>
        <Markdown reference={com => { this.mdc = com }} content={docs} />
      </div>
    )
  }
}
