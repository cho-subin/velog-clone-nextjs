import React from 'react'
import router from 'next/router'

import cardStyle from '../styles/card.module.css'
import iconImage from '@/assets/images/icon'
import Image from 'next/image'

interface IPROPS{
  item:any
}

const Card:React.FC<IPROPS> = ({item}) => {

  const url = item.cardImg

  return (
    <div className={cardStyle.card}>
      <a href=''>
        <div className={cardStyle.card_img}>
          <Image src={url} alt='cardImg'/>
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
          <Image src={url} alt='' />
          <span>by <b>{item.nickname}</b></span>
        </a>
        <div className={cardStyle.card_likes}>
          <iconImage.like alt="like" width={24} height={24} className={cardStyle.like_icon} />
          {item.numberOfLike}
        </div>
      </div>
    </div>
  )
}

export default Card
