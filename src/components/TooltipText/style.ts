import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  .tooltip {
    text-align: center;
    white-space: nowrap;
    background: #fff;
    padding: 5px 4px;
    border-radius: 5px;
    box-shadow: 2px 1px 4px 2px rgba(0, 0, 0, 0.20);
    position: absolute;
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity .2s;
    
    span {
      color: #172765;
      font-size: 12px;
    }

    &::before {
      content: '';
      border-style: solid;
      border-color: #fff transparent;
      border-width: 6px 6px 0 6px;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover {
    .tooltip {
      opacity: 1;
    }
  }

`