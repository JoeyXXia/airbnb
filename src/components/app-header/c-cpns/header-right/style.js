import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  color: ${(props) => props.theme.text.primary};

  .btns {
    display: flex;
    align-items: center;
    color: ${(props) =>
      props.theme.isAlpha ? '#fff' : props.theme.text.primary};

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        ${(props) =>
          props.theme.isAlpha ? 'rgba(255,255,255,.1)' : '#f5f5f5'};
      }
    }
  }

  .profile {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 24px;
    width: 77px;
    height: 42px;
    border: 1px solid #ccc;
    background-color: #fff;
    color: ${(props) => props.theme.text.primary};
    cursor: pointer;
    border-radius: 25px;
    ${(props) => props.theme.mixin.boxShadow};

    .panel {
      position: absolute;
      top: 68px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      color: #666;

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`
