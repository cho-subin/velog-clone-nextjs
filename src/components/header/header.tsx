import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import headerStyle from '../../styles/header.module.css'
import iconImage from '@/assets/images/icon'
import HeaderLogo from './headerLogo'
import Link from 'next/link'

const Header = () => {

    const router = useRouter();
    
    const {detail:id} = router.query
    // console.log('detail', id)

    const noneId = id?.slice(1)

    return (
        <div className={headerStyle.header_wrap}>
            {/* <div className={headerStyle.header_logo}>
                <a href='' onClick={() => router.replace('/')}>
                <iconImage.logo/></a>
            </div> */}
            <div className={headerStyle.header_left}>
                {router.pathname == '/' ?
                    <HeaderLogo className={headerStyle.header_logo}>
                        <Link href='/'>
                            <iconImage.logo />
                        </Link>
                    </HeaderLogo>
                    :
                    <HeaderLogo className={headerStyle.header_logo2}>
                        <Link href='/'>
                            <iconImage.logo2 className={headerStyle.header_logoV}  width={28} height={28} />
                        </Link>
                        <Link href='/write'>
                            <p>{noneId}.log</p>
                        </Link>
                    </HeaderLogo>
                }
            </div>
            <div className={headerStyle.header_right}>
                <button className={headerStyle.night_mode}>
                    <div className={headerStyle.night_mode_div}>
                        <div className={headerStyle.night_mode_rotate}>
                            <iconImage.nightMode className={headerStyle.night_mode_icon} />
                        </div>
                    </div>
                </button>
                <a className={headerStyle.search}>
                    <iconImage.search width={18} height={18}/>
                </a>
                <button className={headerStyle.write_btn} onClick={()=>router.push('/write')}>새 글 작성</button>
                <div>
                    <div className={headerStyle.profile}>
                        <iconImage.logo className={headerStyle.profile_img} />
                        <iconImage.profile className={headerStyle.profile_svg} width={10} height={5} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
