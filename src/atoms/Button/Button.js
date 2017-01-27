import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import * as S from 'util/selectors'


const Button = styled.button`
  display: flex;
  text-decoration: none;
  padding: 0 2rem;
  border: 1px solid;
  border-radius: .3rem;
  color: white;
  cursor: pointer;
  justify-content: center;
  ${props => props.wide && css`
    flex-grow: 1;
  `}
  ${S.theme('buttonStyles')};
  ${S.cond('primary', 'buttonPrimary')};
  ${S.cond('success', 'buttonSuccess')};
  ${S.cond('warning', 'buttonWarning')};
  ${S.cond('danger', 'buttonDanger')};
  ${S.cond('bordered', 'buttonBordered')};
  ${S.cond('loading', 'buttonLoading')};
`

Button.propTypes = {
  wide: PropTypes.bool,

  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  bordered: PropTypes.bool,
  loading: PropTypes.bool,
}

export default Button
