import { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import Tag from 'atoms/Tag/Tag'
import { allMixins, Types } from 'util/styles'


const Row = styled(Tag)`
  display: flex;
  flex-direction: row;
  ${allMixins}
  ${props => props.marginBetween && css`
    & > :not(:first-child) { margin-left: ${
      typeof props.marginBetween === 'number' ? props.marginBetween + 'px' : props.marginBetween
    } }
  `}
`

Row.propTypes = {
  ...Types,
  marginBetween: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Row
