import React from 'react'
import WriteHeader from '@/components/write/writeHeader';
import WrtieStyle from '../../styles/write/write.module.css'

const wrtieLeft = () => {
    return (
        <div className={WrtieStyle.wrtieLeft}>
            <div className={WrtieStyle.wrtieLeftWrap}>
                <WriteHeader />
            </div>
        </div>
    )
}

export default wrtieLeft
