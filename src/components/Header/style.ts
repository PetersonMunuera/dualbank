import styled, { css } from 'styled-components'

interface UserProps {
  isFocused: boolean
}

export const Container = styled.div`
  width: 100%;
  height: 71px;
  background: #fff;
  display: flex;
  align-items: center;
  position: relative;

  > img {
    margin-left: 14px;
    border-right: 1px solid #E5E4E2;
    padding-right: 6px;
    margin-right: 16px;
  }
`

export const Account = styled.div`
  margin-right: 24px;

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 12px;
      color: #622EE5;
      margin-right: 15px;
    }
  }
`

export const User = styled.div<UserProps>`
  display: flex;
  align-items: center;
  margin-left: auto;

  img {
    cursor: pointer;
    margin-right: 20px;
    width: 24px;
    height: 24px;
  }

  div {
    display: flex;
    border: 1px solid #E5E4E2;
    border-radius: 5px;
    padding: 6px 12px;
    width: 160px;
    margin-right: 20px;
    transition: border-color .2s;

    input {
      border: 0;
      outline: none;
      width: 100%;

      &&::placeholder {
        color: #778899;
      }
    }

    img {
      width: 16px;
      height: 16px;
      margin-right: 0;
      margin-left: 20px;
    }
  }

  ${props => props.isFocused && css`
    div {
      border-color: #778899;
    }
  `}

  img[alt="user profile"] {
    border: 1px solid #172765;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`