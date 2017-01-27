import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import { transform } from 'babel-standalone'

import * as PatternLibrary from 'pattern-library'
import * as Atoms from 'pattern-library/atoms'
import * as Molecules from 'pattern-library/molecules'
import * as Organisms from 'pattern-library/organisms'
import * as Themes from 'pattern-library/themes'

import CodeMirror from 'codemirror'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/jsx/jsx.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/mdn-like.css'


const syntheticScope = {
  'react': React,
  'pattern-library': PatternLibrary,
  'pattern-library/atoms': Atoms,
  'pattern-library/molecules': Molecules,
  'pattern-library/organisms': Organisms,
  'pattern-library/themes': Themes,
}

function syntheticRequire(name) {
  if (!syntheticScope[name]) {
    throw new Error(`Cannot find module '${name}'`)
  }

  return syntheticScope[name]
}

const DEBOUNCE_TIME = 900 // ms

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 13px;

  & .cm-s-mdn-like.CodeMirror {
    border: 1px solid #ccc;
    border-left: none;
  }

  & .CodeMirror {
    height: auto;
  }
`

const RenderedWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-bottom: none;
  border-left: 6px solid rgba(0,83,159,0.65);
  ${''/* background-color: white; */}
  background-image: url(data:image/png;base64,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);
`

const ErrorWrapper = styled.pre`
  font-size: 12px;
  line-height: 2;
  padding: 20px;
  background-color: #ef3737;
  color: white;
  margin-bottom: 0;
  white-space: pre-wrap;
`

export default class Playground extends Component {
  static propTypes = {
    sourceCode: PropTypes.string,
  }

  static defaultProps = {
    sourceCode: '',
  }

  state = {
    error: false,
  }

  editor = null
  handleCodeChange = this.handleCodeChange.bind(this)
  timeoutID = null

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.error !== nextState.error) {
      return true
    }

    return false
  }

  componentWillUnmount() {
    if (this.editor) {
      this.editor.off('change', this.handleCodeChange)
      this.editor.toTextArea()
    }
  }

  componentDidMount() {
    this.editor = CodeMirror.fromTextArea(this.refs.editor, {
      mode: 'jsx',
      lineNumbers: true,
      smartIndent: false,
      tabSize: 2,
      matchBrackets: true,
      theme: 'mdn-like',
      readOnly: false,
      fontSize: 12,
      viewportMargin: Infinity,
    })
    console.log(this.editor)
    this.editor.on('change', this.handleCodeChange)
    this.handleCodeChange()
  }

  handleCodeChange() {
    clearTimeout(this.timeoutID)
    this.timeoutID = setTimeout(() => this.executeCode(), DEBOUNCE_TIME)
  }

  compileSourceCode(code, scope) {
    const functionCode = transform(code, {
      presets: ['es2015', 'stage-0', 'react'],
    }).code

    return `
      (function(require, module, exports, mountPoint) {
        ${functionCode}
      })
    `
  }

  executeCode() {
    const scope = { React, ...PatternLibrary }
    const scopeEntries = Object.keys(scope).map(k => scope[k])
    const mountPoint = this.refs.mountPoint
    const mod = { exports: {} }

    try {
      ReactDOM.unmountComponentAtNode(mountPoint)
      this.setState({ error: false })
    }
    catch (error) {
      console.error('Unmounting error:', error)
      this.setState({ error })
    }

    try {
      const compiledFunction = this.compileSourceCode(this.editor.getValue(), scope)
      const result = eval(compiledFunction)(syntheticRequire, mod, mod.exports, mountPoint)
      const Element = mod.exports.default
      ReactDOM.render(
        <ThemeProvider theme={Themes.light}>
          <RenderedWrapper>
            <Element />
          </RenderedWrapper>
        </ThemeProvider>,
        mountPoint
      )
      this.setState({ error: false })
    }
    catch (error) {
      console.error('Playground error:', error)
      this.setState({ error })
    }
  }

  render() {
    return (
      <Wrapper>
        {this.state.error && <ErrorWrapper>{this.state.error.message}</ErrorWrapper>}
        <div ref="mountPoint" />
        <textarea ref="editor" defaultValue={this.props.sourceCode} />
      </Wrapper>
    )
  }
}
