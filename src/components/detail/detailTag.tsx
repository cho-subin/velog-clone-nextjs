import Link from 'next/link'
import React from 'react'
import detailHeaderStyle from '../../styles/detail/detailHeader.module.css'

const detailTag = () => {
  return (
    <div className={detailHeaderStyle.detailTag}>
        <Link href={''} className={detailHeaderStyle.tag}>태그들</Link>
    </div>
  )
}

export default detailTag
