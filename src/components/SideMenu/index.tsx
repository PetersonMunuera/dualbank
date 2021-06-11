import React from 'react'

import { Menu } from './style'

import house from '../../assets/house.svg'
import chart from '../../assets/chart.svg'
import chartLineUp from '../../assets/chart-line-up.svg'
import money from '../../assets/money.svg'
import handshake from '../../assets/handshake.svg'
import pix from '../../assets/pix.png'
import creditCard from '../../assets/credit-card.svg'
import receipt from '../../assets/receipt.svg'
import wrench from '../../assets/wrench.svg'
import question from '../../assets/question.svg'
import arrowRight from '../../assets/arrow-right.svg'

const SideMenu: React.FC = () => {
  return (
    <Menu>
      <img src={ house } alt="house" />
      <img src={ chart } alt="chart" />
      <img src={ chartLineUp } alt="chartLineUp" />
      <img src={ money } alt="money" />
      <img src={ handshake } alt="handshake" />
      <img src={ pix } alt="pix" />
      <img src={ creditCard } alt="creditCard" />
      <img src={ receipt } alt="receipt" />
      <img src={ wrench } alt="wrench" />
      <img src={ question } alt="question" />
      <img src={ arrowRight } alt="arrow right" />
    </Menu>
  )
}

export default SideMenu