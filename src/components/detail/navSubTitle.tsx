import Link from 'next/link'
import React from 'react'
import detailHeaderStyle from '../../styles/detail/detailHeader.module.css'

const navSubTitle = () => {
    return (
        <div className={detailHeaderStyle.navSubTitle}>
            <div className={detailHeaderStyle.navSubTitleWrap}>
                <div className={detailHeaderStyle.navSubTitleLists}>
                    <div className={detailHeaderStyle.navSubTitleList}>
                        <Link href={'/'}>큰제목</Link>
                    </div>
                    <div className={detailHeaderStyle.navSubTitleList1}>
                        <Link href={'/'}>소제목</Link>
                    </div>
                    <div className={detailHeaderStyle.navSubTitleList2}>
                        <Link href={'/'}>소제목2</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navSubTitle
