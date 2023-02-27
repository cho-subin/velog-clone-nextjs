import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import WrtieStyle from '../../styles/write/write.module.css'

const writeSendSection = () => {
    return (
        <div className={WrtieStyle.writeSendSectionWrap}>
            <Link href={'/'}>
                <button className={WrtieStyle.writeSendSectionBtn}>
                    <Image src={''} alt={''} style={{ fontSize: '1.25rem', marginRight: '0.5rem' }} />
                    <span style={{ fontSize: '1.125rem' }}>나가기</span>
                </button>
            </Link>
            <div className={WrtieStyle.writeSendSectionWrap1}>
                <button className={WrtieStyle.writeSendSectionBtn1}>임시저장</button>
                <button className={WrtieStyle.writeSendSectionBtn2}>출간하기</button>
            </div>
        </div>
    )
}

export default writeSendSection
