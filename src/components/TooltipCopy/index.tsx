import React, { useCallback, useState, useRef } from 'react'

import { Container } from './style'

interface TooltipProps {
  title: string
  icon: string
  value: string
  feedback: string
}

const TooltipCopy: React.FC<TooltipProps> = ({ title, icon, value, feedback, children }) => {
  const [copied, setCopied] = useState(false)
  const valueRef = useRef<HTMLInputElement>(null)

  const copy = useCallback(() => {
    setCopied(true)
    navigator.clipboard.writeText(value)
  },[value])

  const reset = useCallback(() => {
    setCopied(false)
  }, [])
  
  return (
    <Container>
      <input ref={valueRef} type="text" value={value} readOnly={true} />
      <div className="tooltip" onClick={ copy } onMouseLeave={ reset }>
        <img src={icon} alt="icon" />
        <span>{copied ? feedback : title}</span>
      </div>
      {children}
    </Container>
  )
}

export default TooltipCopy