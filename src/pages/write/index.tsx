import React from 'react'
import { useRouter } from 'next/router'
import WriteLeft from '@/components/write/wrtieLeft';
import WriteRight from '@/components/write/writeRight';
import WrtieStyle from '../../styles/write/write.module.css'

const Write = () => {

  const route = useRouter();
  // console.log(route)

  return (
    <div className={WrtieStyle.write}>
      <div className={WrtieStyle.writeWrap}>

        <WriteLeft/>
      </div>
    </div>
  )
}

export default Write
