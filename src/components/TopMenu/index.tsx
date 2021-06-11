import React from 'react'

import ToggleValue from '../ToggleValue'
import TooltipText from '../TooltipText'
import { Container, Controls, Allocation } from './style'

import tag from '../../assets/tag.svg'
import plusCircle from '../../assets/plus-circle.svg'

const TopMenu: React.FC = () => {
  return (
    <Container>
      <Controls>
        <div className="dropdown">
          <img src={ tag } alt="tag" />
          <div>
            <h3>Disponibilizado</h3>
            <span><p>R$20.000,00</p> do seu saldo</span>

            <h3>Distribuído</h3>
            <span><p>R$12.050,00</p> (60,25%)</span>
            
            <button>ALTERAR</button>
          </div>
        </div>
        <TooltipText title="Nova alocação">
          <img src={ plusCircle } alt="plus circle" />
        </TooltipText>
      </Controls>
      <Allocation>
        <span className="bg-blue">P</span>
        <ToggleValue title="Principal" value="R$10.000,00" />
      </Allocation>
      <Allocation>
        <span className="bg-grey">A</span>
        <ToggleValue title="Aluguel" value="R$1.600,00" />
      </Allocation>
      <Allocation>
        <span className="bg-red">A</span>
        <ToggleValue title="Alimentação" value="R$450,00" />
      </Allocation>
    </Container>
  )
}

export default TopMenu