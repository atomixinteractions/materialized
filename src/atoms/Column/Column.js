import { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import Tag from 'atoms/Tag/Tag'
import { allMixins, Types } from 'util/styles'


const Column = styled(Tag)`
  display: flex;
  flex-direction: column;
  ${allMixins}
  ${props => props.marginBetween && css`
    & > :not(:first-child) { margin-top: ${
      typeof props.marginBetween === 'number' ? props.marginBetween + 'px' : props.marginBetween
    } }
  `}
`

Column.propTypes = {
  ...Types,
  marginBetween: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Column
