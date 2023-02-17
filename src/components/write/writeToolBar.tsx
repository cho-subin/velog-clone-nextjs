import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import WrtieStyle from '../../styles/write/write.module.css'

const writeToolBar = () => {
  return (
    <div className={WrtieStyle.writeToolBar}>
      <button className={WrtieStyle.writeToolBarH1Btn}>
        <div className={WrtieStyle.writeToolBarH1BtnWrap}>
          H<span>1</span>
        </div>
      </button>
      <button className={WrtieStyle.writeToolBarH1Btn}>
        <div className={WrtieStyle.writeToolBarH1BtnWrap}>
          H<span>2</span>
        </div>
      </button>
      <button className={WrtieStyle.writeToolBarH1Btn}>
        <div className={WrtieStyle.writeToolBarH1BtnWrap}>
          H<span>3</span>
        </div>
      </button>
      <button className={WrtieStyle.writeToolBarH1Btn}>
        <div className={WrtieStyle.writeToolBarH1BtnWrap}>
          H<span>4</span>
        </div>
      </button>
      <div className={WrtieStyle.writeToolBarLine} />
      <button className={WrtieStyle.writeToolBarH1Btn}>
        <Link href={'/'}>
          <Image src={''} alt={''}></Image>
        </Link>
      </button>
      <button className={WrtieStyle.writeToolBarH1Btn}>
        <Link href={'/'}>
          <Image src={''} alt={''}></Image>
        </Link>
      </button>
      <button className={WrtieStyle.writeToolBarH1Btn}>
        <Link href={'/'}>
          <Image src={''} alt={''}></Image>
        </Link>
      </button>
      <div className={WrtieStyle.writeToolBarLine} />
      <button className={WrtieStyle.writeToolBarH1Btn}>
        <Link href={'/'}>
          <Image src={''} alt={''}></Image>
        </Link>
      </button>
      <button className={WrtieStyle.writeToolBarH1Btn}>
        <Link href={'/'}>
          <Image src={''} alt={''}></Image>
        </Link>
      </button>
      <button className={WrtieStyle.writeToolBarH1Btn}>
        <Link href={'/'}>
          <Image src={''} alt={''}></Image>
        </Link>
      </button>
      <button className={WrtieStyle.writeToolBarH1Btn}>
        <Link href={'/'}>
          <Image src={''} alt={''}></Image>
        </Link>
      </button>
    </div>
  )
}

export default writeToolBar
