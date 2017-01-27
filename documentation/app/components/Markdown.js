import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

const Markdowned = styled.div`
  padding: 30px 45px 50px;
  font-size: 16px;
  word-wrap: break-word;
  line-height: 1.5;
  ${props => props.fullsized || css`max-width: 800px;`}
  color: #333;

  &::before {
    display: table;
    content: "";
  }

  &::after {
    display: table;
    clear: both;
    content: "";
  }

  & article > *:first-child {
    margin-top: 0 !important;
  }

  & h1, & h2, & h3, & h4, & h5, & h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  & h1 {
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.3em;
  }

  & h2 {
    padding-bottom: 0.3em;
    font-size: 1.3em;
    border-bottom: 1px solid #eee;
  }

  & h3 {
    font-size: 1.25em;
  }

  & p, & blockquote, & ul, & ol, & dl, & table, &pre {
    margin-top: 0;
    margin-bottom: 16px;
  }

  & strong {
    font-weight: 600;
  }

  & em {
    font-style: italic;
  }

  & a {
    color: #4078c0;
    text-decoration: none;
    background-color: transparent;
  }

  & a:active, & a:hover {
    text-decoration: underline;
    outline-width: 0;
  }

  & ul, & ol {
    padding-left: 2em;
  }

  & li+li {
    margin-top: 0.25em;
  }

  & blockquote {
    padding: 0 1em;
    color: #777;
    border-left: 0.25em solid #ddd;
  }

  & blockquote>:last-child { margin-bottom: 0; }
  & blockquote>:first-child { margin-top: 0; }

  & code, & tt {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(0,0,0,.04);
    border-radius: 3px;
    font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  }
  ${''/* & code::before, & code::after, & tt::before, & tt::after {
    letter-spacing: -0.2em;
    content: "\0e1";
  } */}

  & img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: white;
  }

  & table {
    display: table;
    width: 100%;
    overflow: auto;
    border-spacing: 0;
    border-collapse: collapse;
  }
  & table tr {
    background-color: white;
    border-top: 1px solid #ccc;
  }
  & table td, & table th {
    padding: 6px 13px;
    border: 1px solid #ddd;
  }
`

const Markdown = (props) => (
  <Markdowned fullsized={props.fullsized}>
    <article ref={props.reference} dangerouslySetInnerHTML={{ __html: props.content }} />
  </Markdowned>
)

Markdown.propTypes = {
  content: PropTypes.string,
  fullsized: PropTypes.bool,
}

export default Markdown;
