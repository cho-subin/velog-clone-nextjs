import React from 'react'
import router from 'next/router'

import headerStyle from '../styles/header.module.css'
import Logo from '../../public/logo.svg'
import NightModeBtn from '../../public/night_mode_icon.svg'
import SearchBtn from '../../public/search_icon.svg'
import ProfileBtn from '../../public/profile_btn.svg'

const Header = () => {

    return (
        <div className={headerStyle.header_wrap}>
            <div className={headerStyle.header_logo}>
                <a href='' onClick={() => router.push('/')}><Logo/></a>
            </div>
            <div className={headerStyle.header_right}>
                <button className={headerStyle.night_mode}>
                    <div className={headerStyle.night_mode_div}>
                        <div className={headerStyle.night_mode_rotate}>
                            <NightModeBtn className={headerStyle.night_mode_icon} />
                        </div>
                    </div>
                </button>
                <a className={headerStyle.search}>
                    <SearchBtn width={18} height={18}/>
                </a>
                <button className={headerStyle.write_btn} onClick={()=>router.push('/write')}>새 글 작성</button>
                <div>
                    <div className={headerStyle.profile}>
                        <Logo className={headerStyle.profile_img} />
                        <ProfileBtn className={headerStyle.profile_svg} width={10} height={5} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
