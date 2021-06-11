import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  .accounts-btn {
    display: flex;
    background: #fff;
    border: none;
    align-items: center;
    margin-bottom: 5px;

    img {
      width: 16px;
      height: 16px;
    }

    span {
      font-size: 16px;
      margin-right: 13px;
      color: #172765;
    }
  }

  .list {
    position: absolute;
    width: 300px;
    height: 240px;
    overflow-y: scroll;
    top: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    z-index: 1;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.25);

    h3 {
      font-size: 14px;
      margin-bottom: 5px;
    }

    span {
      font-size: 12px;
      display: flex;
      color: #622EE5;
      margin-bottom: 20px;
    }
  }
`