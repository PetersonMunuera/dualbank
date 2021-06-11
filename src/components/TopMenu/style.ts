import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
`

export const Controls = styled.div`
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
    background: linear-gradient(135deg, #FFFFFF, #E5E4E2);
    padding: 5px;
    border-radius: 50%;
    margin-left: 15px;
  }

  .dropdown {
    position: relative;

    div {
      visibility: hidden;
      width: 280px;
      position: absolute;
      top: 100%;
      left: 20px;
      background: linear-gradient(to right, #F9F9F9, #E5E4E2);
      padding: 20px;
      border-radius: 5px;
      box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);
      opacity: 0;
      transition: opacity .2s;

      h3 {
        font-family: 'Raleway', sans-serif;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      span {
        display: flex;
        margin-bottom: 20px;

        p {
          margin-right: 5px;
          color: #69D531;
        }
      }

      button {
        border: none;
        background: #622EE5;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 12px;
      }
    }

    &:hover {
      div {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`

export const Allocation = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: #fff;
  }

  .bg-blue {
    background: linear-gradient(135deg, #622EE5, #172765);
  }

  .bg-grey {
    background: linear-gradient(135deg, #778899, #172765);
  }

  .bg-red {
    background: linear-gradient(135deg, #FF354E, #172765);
  }
`