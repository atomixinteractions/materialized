import React, { PropTypes } from 'react'
import R from 'ramda'


const dropMixins = R.omit(['marginBetween', 'padding', 'justifyContent', 'alignItems'])

const Tag = ({ tag: TagName, children, ...props }) => (
  <TagName {...dropMixins(props)}>
    {children}
  </TagName>
)

Tag.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
}

Tag.defaultProps = {
  tag: 'div',
}

export default Tag
