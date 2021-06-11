import React, { useState, useCallback } from 'react'

import { Container } from './style'

import eye from '../../assets/eye.svg'
import eyeOff from '../../assets/eye-off.svg'

interface ToggleProps {
  title: string
  value: string
}

const ToggleValue: React.FC<ToggleProps> = ({ title, value }) => {

  const [visible, setVisible] = useState(false)

  const toggle = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  return (
    <Container>
      <div>
        <span>{title}</span>
        <img src={ visible ? eyeOff : eye } alt="toggle eye" onClick={ toggle } />
      </div>
      { visible ? <span>{ value }</span> : <div className="hidden"></div>}
    </Container>
  )
}

export default ToggleValue