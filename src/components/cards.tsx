import React, { useState } from 'react'
import router from 'next/router'

import cardsStyle from '../styles/cards.module.css'
import Card from './card'
import DummyData from './dummydata.json'

const Cards = () => {

  return (
    <div className={cardsStyle.cards}>
      <main className={cardsStyle.cards_main}>
        <div className={cardsStyle.cards_wrap1}>
          {DummyData.map((item,idx)=>{
            return(
              <Card item={item} key={idx}/>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default Cards
