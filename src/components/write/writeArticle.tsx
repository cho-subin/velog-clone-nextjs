import React from 'react'
import WrtieStyle from '../../styles/write/write.module.css'

const writeArticle = () => {
    return (
        <div className={WrtieStyle.writeArticle}>
            <div className={WrtieStyle.writeArticleWrap1}>
                <textarea placeholder='당신의 이야기를 적어보세요...' autoCorrect="off" autoCapitalize="off" spellCheck="false" />
            </div>
        </div>
    )
}

export default writeArticle
