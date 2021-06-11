import styled, { css } from 'styled-components'

import printer from '../../assets/printer.svg'
import file from '../../assets/file.svg'
import share from '../../assets/share.svg'
import printerLight from '../../assets/printer-light.svg'
import fileLight from '../../assets/file-light.svg'
import shareLight from '../../assets/share-light.svg'

interface AvailableProps {
  balanceVisible: boolean
}

export const Container = styled.div`
  display: flex;
`
export const Dashboard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    margin: 20px;

    h2 {
      font-family: 'Raleway', sans-serif;
      font-size: 20px;
      font-weight: 600;
    }

    .btn {
      width: 80px;
      height: 40px;
      border: 1px solid #622EE5;
      border-radius: 5px;
      margin-left: 20px;
      cursor: pointer;
      background-repeat: no-repeat;
      background-position: center;
    }

    .printer {
      background-image: url(${printer});
      
      &:hover {
        background: url(${printerLight}), linear-gradient(to left, #622EE5, #A683FF);
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .file {
      background-image: url(${file});

      &:hover {
        background: url(${fileLight}), linear-gradient(to left, #622EE5, #A683FF);
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .share {
      background-image: url(${share});

      &:hover {
        background: url(${shareLight}), linear-gradient(to left, #622EE5, #A683FF);
        background-repeat: no-repeat;
        background-position: center;
      }
    }

  }
`

export const DateBalance = styled.div`
  display: flex;
  width: 280px;
  border: 1px solid #E5E4E2;
  border-bottom: 2px solid #622EE5;
  border-radius: 5px 5px 0 0 ;
  margin-left: 20px;
  padding: 5px 10px;

  div {
    display: flex;
    flex-direction: column;

    span:first-child {
      font-size: 12px;
      color: #622EE5;
      margin-bottom: 5px;
    }
  }

  img {
    margin-left: auto;
    width: 20px;
  }
`

export const Updated = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  margin-left: 40px;

  img {
    margin-left: 10px;
  }
`

export const Available = styled.div<AvailableProps>`
  display: flex;
  width: 280px;
  border: 1px solid #E5E4E2;
  border-bottom: 2px solid #778899;
  border-radius: 5px 5px 0 0 ;
  margin-left: 20px;
  padding: 5px 10px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    margin-right: auto;
    height: 40px;

    span:first-child {
      font-size: 12px;
      margin-bottom: 5px;
    }

    span:last-child {
      color: #69D531;
    }

    ${props => !props.balanceVisible && css`
        span:first-child {
          font-size: 16px;
          margin: 0;
          color: #622EE5;
        }
      `}
  }

  img {
    cursor: pointer;
    width: 24px;
  }
`