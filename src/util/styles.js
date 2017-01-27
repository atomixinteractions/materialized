import { PropTypes } from 'react'
import { css } from 'styled-components'


export const propNaming = {
  justifyContent: 'justify-content',
  alignItems: 'align-items',
  wrap: 'flex-wrap',
}

export const namesMapping = {

  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',

  nowrap: 'nowrap',
  wrapReverse: 'wrap-reverse'
}

export const mapStyle = (propName, sz = '') => props => {
  if (props[propName]) {
    const value = props[propName]
    return css`${propNaming[propName] || propName}: ${namesMapping[value] || value}${sz}`
  }
  return ''
}

export const allMixins = css`
  ${mapStyle('justifyContent')};
  ${mapStyle('alignItems')};
  ${mapStyle('padding', 'px')};
  ${mapStyle('wrap')};
`

export const Types = {
  justifyContent: PropTypes.oneOf(['flexStart', 'flexEnd', 'center', 'spaceAround', 'spaceBetween']),
  alignItems: PropTypes.oneOf(['flexStart', 'flexEnd', 'center', 'baseline', 'stretch']),
  padding: PropTypes.number,
  wrap: PropTypes.oneOf(['wrap', 'nowrap', 'wrapReverse', 'initial']),
}
