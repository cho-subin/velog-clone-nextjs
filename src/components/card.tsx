import React from 'react'
import router from 'next/router'

import cardStyle from '../styles/card.module.css'
import Like from '../../public/like.svg'
import DummyData from './dummydata.json'

const Card = () => {

  console.log(DummyData)

  return (
    <>
      {DummyData.map((item) => {
        return (
          <>
          <div className={cardStyle.card}>
            <a href=''>
              <div className={cardStyle.card_img}>
                <img src={item.cardImg} />
              </div>
            </a>
            <div className={cardStyle.card_text_wrap}>
              <a href=''>
                <h4>{item.title}</h4>
                <div className={cardStyle.card_text}>
                  <p>{item.text}</p>
                </div>
              </a>
              <div className={cardStyle.card_sub_info}>
                <span>{item.writeDate}</span>
                <span className={cardStyle.separator}>·</span>
                <span>{item.numberOfComments}개의 댓글</span>
              </div>
            </div>
            <div className={cardStyle.card_user_info}>
              <a href=''>
                <img src='' />
                <span>by <b>{item.nickname}</b></span>
              </a>
              <div className={cardStyle.card_likes}>
                <Like width={24} height={24} className={cardStyle.like_icon} />
                355
              </div>
            </div>
          </div>
          </>
        )
      }
      )}
    </>
  )
}

export default Card
