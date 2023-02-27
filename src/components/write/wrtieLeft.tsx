import React from 'react'
import WriteHeader from '@/components/write/writeHeader';
import WriteToolBar from '@/components/write/writeArticle/writeToolBar';
import WriteArticle from '@/components/write/writeArticle/writeArticle';
import WriteSendSection from '@/components/write/writeSendSection';

import WrtieStyle from '../../styles/write/write.module.css'

const wrtieLeft = () => {
    return (
        <div className={WrtieStyle.wrtieLeft}>
            <div className={WrtieStyle.wrtieLeftWrap}>
                <div className={WrtieStyle.wrtieLeftWrap1}>
                    <WriteHeader />
                    <WriteArticle />
                </div>
                <div className={WrtieStyle.writeSendSection}>
                    <WriteSendSection />
                </div>
            </div>
            
        </div>
    )
}

export default wrtieLeft
