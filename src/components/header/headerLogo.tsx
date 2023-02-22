import iconImage from '@/assets/images/icon'
import router from 'next/router'
import React, { ReactNode } from 'react'

type props = {
    className:string
    children:ReactNode;
}

const headerLogo = ({ className, children}:props) => {
    // console.log('className',className)
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default headerLogo
