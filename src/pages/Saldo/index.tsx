import React, { useState, useCallback } from 'react'

import Header from '../../components/Header'
import SideMenu from '../../components/SideMenu'
import TopMenu from '../../components/TopMenu'
import { Container, Dashboard, Content, DateBalance, Updated, Available } from './styles'

import arrowDown from '../../assets/arrow-down.svg'
import refresh from '../../assets/refresh.svg'
import eye from '../../assets/eye.svg'
import eyeOff from '../../assets/eye-off.svg'
import shield from '../../assets/shield.svg'

const Saldo: React.FC = () => {
  const [balanceVisible, setBalanceVisible] = useState(false)

  const toggleBalanceVisible = useCallback(() => {
    setBalanceVisible(!balanceVisible)
  }, [balanceVisible])

  return (
    <>
      <Header />
      <Container>
        <SideMenu />
        <Dashboard>
          <TopMenu />
          <Content>
            <header>
              <h2>Saldo Bancário</h2>
              <div className="btn printer"></div>
              <div className="btn file"></div>
              <div className="btn share"></div>
            </header>
            <DateBalance>
              <div>
                <span>Data do Saldo</span>
                <span>07/12/2020</span>
              </div>
              <img src={arrowDown} alt="arrow down" />
            </DateBalance>
            <Updated>
              <span>Saldo atualizado às 16:48</span>
              <img src={refresh} alt="refresh" />
            </Updated>
            <Available balanceVisible={balanceVisible}>
              <img src={ shield } alt="shield" />
              <div>
                <span>{balanceVisible ? 'Saldo disponível' : 'Saldo'}</span>
                { balanceVisible && <span>R$ 40.000,00</span> }
              </div>
              <img src={balanceVisible ? eyeOff : eye} alt="arrow down" onClick={ toggleBalanceVisible } />
            </Available>
          </Content>
        </Dashboard>
      </Container>
    </>
  )
}

export default Saldo