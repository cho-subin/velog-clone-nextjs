import React from 'react'
import detailHeaderStyle from '../../styles/detail/detailHeader.module.css'
import DetailUserDate from './detailUserDate'
import DetailTag from './detailTag'
import DetailAsideLike from './detailAsideLike'
import NavSubTitle from './navSubTitle'
import Image from 'next/image'

const detailHeader = () => {
    return (
        <div className={detailHeaderStyle.detailHeader}>
            <div className={detailHeaderStyle.detailWrap}>
                <h1>객체지향으로 리액트 고급 패턴 이해하기[Compound component & Render props]</h1>
                <DetailUserDate/>
                <DetailTag/>
                <DetailAsideLike/>
                <NavSubTitle/>
            </div>
            <Image src={''} alt='' className={detailHeaderStyle.headerImg}/>
        </div>
    )
}

export default detailHeader
