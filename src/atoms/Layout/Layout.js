import { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import R from 'ramda'

import Tag from 'atoms/Tag/Tag'
import { allMixins, Types } from 'util/styles'


const Layout = styled(Tag)`
  display: flex;
  flex-direction: ${R.prop('direction')};
  ${allMixins}
  ${props => props.marginBetween && css`
    & > :not(:first-child) { margin-${props.direction === 'column' ? 'top' : 'left'}: ${
      typeof props.marginBetween === 'number' ? props.marginBetween + 'px' : props.marginBetween
    } }
  `}
`

Layout.propTypes = {
  ...Types,
  marginBetween: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  direction: PropTypes.oneOf(['row', 'column']),
}

Layout.defaultProps = {
  direction: 'row',
}

export default Layout
