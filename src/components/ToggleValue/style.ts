import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    display: flex;
    align-items: center;
    
    span {
      font-size: 12px;
      margin-right: 14px;
    }

    img {
      cursor: pointer;
      width: 16px;
      height: 16px;
    }

  }
  
  .hidden {
    width: 80px;
    height: 12px;
    background-color: #E5E4E2;
    border-radius: 5px;
  }

  > span {
    font-size: 14px;
    color: #69D531;
  }


`