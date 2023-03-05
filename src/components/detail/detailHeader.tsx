import React from 'react'
import detailHeaderStyle from '../../styles/detail/detailHeader.module.css'
import DetailUserDate from './detailUserDate'
import DetailTag from './detailTag'
import DetailAsideLike from './detailAsideLike'
import NavSubTitle from './navSubTitle'
import Image from 'next/image'
import { StateType } from '@/redux/slice/dummySlice'

interface IPROPS {
    detailData: StateType
}

const detailHeader: React.FC<IPROPS> = ({detailData}) => {

    // console.log('detailData',detailData)

    return (
        <div className={detailHeaderStyle.detailHeader}>
            <div className={detailHeaderStyle.detailWrap}>
                <h1>{detailData?.title}</h1>
                <DetailUserDate detailData={detailData}/>
                <DetailTag/>
                <DetailAsideLike numberOfLike={detailData?.numberOfLike} />
                <NavSubTitle/>
            </div>
            <Image src={''} alt='' className={detailHeaderStyle.headerImg}/>
        </div>
    )
}

export default detailHeader
