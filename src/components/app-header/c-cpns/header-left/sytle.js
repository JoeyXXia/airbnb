import  styled from "styled-components"

export const LeftWrapper = styled.div`
  flex: 1;
  color: ${(props => props.theme.color.primary)};
  display: flex;
  align-items: center;

  .logo {
    margin-left: 25px;
    cursor: pointer;
  }
`