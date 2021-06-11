import React, { useState, useCallback } from 'react'

import { Container } from './style'

import arrowDown from '../../assets/arrow-down.svg'
import arrowUp from '../../assets/arrow-up.svg'

const AccountsList: React.FC = () => {
  const [active, setActive] = useState(false)

  const toggle = useCallback(() => {
    setActive(!active)
  }, [active])

  return (
    <Container>
      <button className="accounts-btn" onClick={toggle}>
        <span>Conta Corrente</span>
        <img src={active ? arrowUp : arrowDown} alt="arrow down" />
      </button>

      {
        active &&
        <div className="list">
          <h3>Conta Corrente</h3>
          <span>
            <p>Ag. 00005-1</p>
            <p>C.C. 00000000000000000020-1</p>
          </span>
          <h3>Conta Corrente</h3>
          <span>
            <p>Ag. 00005-1</p>
            <p>C.C. 00000000000000000020-1</p>
          </span>
          <h3>Conta Corrente</h3>
          <span>
            <p>Ag. 00005-1</p>
            <p>C.C. 00000000000000000020-1</p>
          </span>
          <h3>Conta Corrente</h3>
          <span>
            <p>Ag. 00005-1</p>
            <p>C.C. 00000000000000000020-1</p>
          </span>
          <h3>Conta Corrente</h3>
          <span>
            <p>Ag. 00005-1</p>
            <p>C.C. 00000000000000000020-1</p>
          </span>
          <h3>Conta Corrente</h3>
          <span>
            <p>Ag. 00005-1</p>
            <p>C.C. 00000000000000000020-1</p>
          </span>
          <h3>Conta Corrente</h3>
          <span>
            <p>Ag. 00005-1</p>
            <p>C.C. 00000000000000000020-1</p>
          </span>
        </div>
      }
    </Container>
  )
}

export default AccountsList