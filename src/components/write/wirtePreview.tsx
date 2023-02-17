import React from 'react'
import WrtieStyle from '../../styles/write/write.module.css'

const wirtePreview = () => {
    return (
        <div className={WrtieStyle.wirtePreview}>
            <h1>제목 프리뷰</h1>
            <div className={WrtieStyle.wirtePreviewTexts}>
                <div className={WrtieStyle.wirtePreviewText}>
                    <p>프리뷰 내용</p>
                </div>
            </div>
        </div>
    )
}

export default wirtePreview
