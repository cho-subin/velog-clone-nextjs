import React from 'react'
import WriteHeader from '@/components/write/writeHeader';
import WriteToolBar from '@/components/write/writeToolBar';
import WriteArticle from '@/components/write/writeArticle';

import WrtieStyle from '../../styles/write/write.module.css'

const wrtieLeft = () => {
    return (
        <div className={WrtieStyle.wrtieLeft}>
            <div className={WrtieStyle.wrtieLeftWrap}>
                <WriteHeader />
                <WriteToolBar />
                <WriteArticle />
            </div>
        </div>
    )
}

export default wrtieLeft
