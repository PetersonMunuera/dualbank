import React, { useState, useCallback } from 'react'

import AccountsList from '../AccountsList'
import ToggleValue from '../ToggleValue'
import Tooltip from '../TooltipCopy'

import { Container, Account, User } from './style'

import logo from '../../assets/logo.svg'
import copy from '../../assets/copy.svg'
import search from '../../assets/search.svg'
import chat from '../../assets/chat.svg'
import bell from '../../assets/bell.svg'
import calendar from '../../assets/calendar.svg'
import userProfile from '../../assets/user-profile.jpg'

const Header: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false)

  const onFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const onBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <Container>
      <img src={logo} alt="Dualbank" />
      <Account>
        <AccountsList />
        <div>
          <Tooltip
            title="Copiar"
            icon={copy}
            value="00005-1"
            feedback="Número da agência copiado."
          >
            <span>Ag. 00005-1</span>
          </Tooltip>
          <Tooltip
            title="Copiar" 
            icon={copy} 
            value="00000000000000000020-1" 
            feedback="Número da conta copiado." 
          >
            <span>C.C. 00000000000000000020-1</span>
          </Tooltip>
          <Tooltip 
            title="Copiar tudo" 
            icon={copy} 
            value="00005-1 00000000000000000020-1" 
            feedback="Números da agência e conta copiados." 
          >
            <img src={copy} alt="copy" />
          </Tooltip>
        </div>
      </Account>
      <ToggleValue title="Saldo" value="R$40.000,00" />
      <User isFocused={ isFocused }>
        <div>
          <input type="text" placeholder="Pesquisar" onFocus={ onFocus } onBlur={ onBlur } />
          <img src={search} alt="search" />
        </div>
        <img src={chat} alt="chat" />
        <img src={calendar} alt="calendar" />
        <img src={bell} alt="bell" />
        <img src={userProfile} alt="user profile" />
      </User>
    </Container>
  )
}

export default Header