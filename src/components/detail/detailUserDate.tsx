import { StateType } from '@/redux/slice/dummySlice'
import Link from 'next/link'
import React from 'react'
import detailHeaderStyle from '../../styles/detail/detailHeader.module.css'

interface IPROPS {
    detailData: StateType
}

const detailUserDate: React.FC<IPROPS> = ({ detailData }) => {
    return (
        <div className={detailHeaderStyle.detailUserDate}>
            <div className={detailHeaderStyle.UserDateWrap}>
                <span className={detailHeaderStyle.detailUserId}>
                    <Link href={'/'}>
                        {detailData?.nickname}
                    </Link>
                </span>
                <span className={detailHeaderStyle.separator}>·</span>
                <span className={detailHeaderStyle.detailDate}>2023년 2월 13일</span>
            </div>
        </div>
  )
}

export default detailUserDate
