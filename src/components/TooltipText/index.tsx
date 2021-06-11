import React from 'react'

import { Container } from './style'

interface TooltipProps {
  title: string
}

const TooltipText: React.FC<TooltipProps> = ({ title, children }) => {
  return (
    <Container>
      <div className="tooltip">
        <span>{title}</span>
      </div>
      {children}
    </Container>
  )
}

export default TooltipText