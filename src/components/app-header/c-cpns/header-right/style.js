import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  color: ${props => props.theme.text.primary};

  .btns {
    display: flex;
    align-items: center;
    
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;
      
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 24px;
    width: 77px;
    height: 42px;
    border: 1px  solid #ccc;
    background-color: #fff;
    color: ${props => props.theme.text.primary};
    cursor: pointer;
    border-radius: 25px;
    ${props => props.theme.mixin.boxShadow}
  }
`
