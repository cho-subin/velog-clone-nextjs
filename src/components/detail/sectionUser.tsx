import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import detailUserStyle from '../../styles/detail/sectionUser.module.css'

import testImage from '../../assets/images/dummyImg/dummy1.jpeg'
import { StateType } from '@/redux/slice/dummySlice'
interface IPROPS {
    detailData: StateType
}

const sectionUser: React.FC<IPROPS> = ({ detailData }) => {
    return (
        <div className={detailUserStyle.sectionUser}>
            <div className={detailUserStyle.sectionUserWrap}>
                <div className={detailUserStyle.sectionUserLists}>
                    <Link href={'/'} >
                        <Image src={detailData?.profileImg} alt={''} className={detailUserStyle.sectionUserImg}/>
                    </Link>
                    <div className={detailUserStyle.sectionUserText}>
                        <div className={detailUserStyle.sectionUserId}>
                            <Link href={'/'}>{detailData?.nickname}</Link>
                        </div>
                        <div className={detailUserStyle.sectionUserMessage}>
                            {detailData?.profileMsg}
                        </div>
                    </div>
                </div>
                <div className={detailUserStyle.sectionUserLine}/>
                <div className={detailUserStyle.sectionUserGitEmail}>
                    <Link href={`https://github.com/${'whtnqls124578'}`}>
                        <Image src={testImage} alt={''} className={detailUserStyle.sectionUserGit}/>
                    </Link>
                    <Link href={`mailto:${'whtnqls124578@naver.com'}`}>
                        <Image src={testImage} alt={''} className={detailUserStyle.sectionUserEmail}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default sectionUser
