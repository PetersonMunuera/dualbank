import styled from 'styled-components'

export const Menu = styled.aside`
  width: 44px;
  display: flex;
  height: calc(100vh - 71px);
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    padding: 10px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(to right, #F9F9F9, #E5E4E2);
    }
  }

  img[alt="chart"] {
    background: #622EE5;
  }

  img[alt="arrow right"] {
    transform: translateX(20px);
    background: #622EE5;
    padding: 10px 15px;
    border-radius: 50%;
  }
`