import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import detailUserStyle from '../../styles/detail/sectionUser.module.css'

import testImage from '../../assets/images/dummyImg/dummy1.jpeg'

const sectionUser = () => {
    return (
        <div className={detailUserStyle.sectionUser}>
            <div className={detailUserStyle.sectionUserWrap}>
                <div className={detailUserStyle.sectionUserLists}>
                    <Link href={'/'} >
                        <Image src={testImage} alt={''} className={detailUserStyle.sectionUserImg}/>
                    </Link>
                    <div className={detailUserStyle.sectionUserText}>
                        <div className={detailUserStyle.sectionUserId}>
                            <Link href={'/'}>id</Link>
                        </div>
                        <div className={detailUserStyle.sectionUserMessage}>
                            여기는 메세지
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
