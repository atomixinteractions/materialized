import { css } from 'styled-components'
import S from '../util/selectors'

const colors = {
  background: "#fafafa",
  primary: "#4682b4",
  success: "#4682b4",
  warning: "#f49530",
  danger: "#e84040",
}

export default {


  buttonStyles: css`
    height: 3rem;
    color: black;
    border-color: #e5e5e5;
    background-color: ${colors.background};

    &:hover {
      background-color: #eee;
    }
  `,

  buttonPrimary: css`
    color: white;
    background-color: ${colors.primary};
  `
}
