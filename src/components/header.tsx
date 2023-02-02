import React from 'react'
import router from 'next/router'

import headerStyle from '../styles/header.module.css'
import iconImage from '@/assets/images/icon'

const Header = () => {

    return (
        <div className={headerStyle.header_wrap}>
            <div className={headerStyle.header_logo}>
                <a href='' onClick={() => router.push('/')}><img src={iconImage.logo}/></a>
            </div>
            <div className={headerStyle.header_right}>
                <button className={headerStyle.night_mode}>
                    <div className={headerStyle.night_mode_div}>
                        <div className={headerStyle.night_mode_rotate}>
                            <img src={iconImage.nightMode} className={headerStyle.night_mode_icon} />
                        </div>
                    </div>
                </button>
                <a className={headerStyle.search}>
                    <img src={iconImage.search} width={18} height={18}/>
                </a>
                <button className={headerStyle.write_btn} onClick={()=>router.push('/write')}>새 글 작성</button>
                <div>
                    <div className={headerStyle.profile}>
                        <img src={iconImage.logo} className={headerStyle.profile_img} />
                        <img src={iconImage.profile} className={headerStyle.profile_svg} width={10} height={5} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
