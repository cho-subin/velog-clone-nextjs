import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import detailNevNextStyle from '../../styles/detail/sectionNevNext.module.css'

const sectionNevNext = () => {
    return (
        <div className={detailNevNextStyle.sectionNevNext}>
            <div className={detailNevNextStyle.sectionNevNextWrap}>
                <Link href={'/'} className={detailNevNextStyle.sectionNevList}>
                    <div className={detailNevNextStyle.sectionNevBtn}>
                        <Image src={''} alt={''}/>
                    </div>
                    <div className={detailNevNextStyle.sectionNevText}>
                        <div className={detailNevNextStyle.sectionNevPost}>이전 포스트</div>
                        <h3>이전 내용입니다</h3>
                    </div>
                </Link>
            </div>
            <div className={detailNevNextStyle.sectionNevNextWrap1}>
                <Link href={'/'} className={detailNevNextStyle.sectionNevList1}>
                    <div className={detailNevNextStyle.sectionNevBtn1}>
                        <Image src={''} alt={''}/>
                    </div>
                    <div className={detailNevNextStyle.sectionNevText1}>
                        <div className={detailNevNextStyle.sectionNevPost1}>다음 포스트</div>
                        <h3>다음 내용입니다</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default sectionNevNext
