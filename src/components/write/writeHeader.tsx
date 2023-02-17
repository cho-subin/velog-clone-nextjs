import React from 'react'
import WrtieStyle from '../../styles/write/write.module.css'

const writeHeader = () => {
    return (
        <div className={WrtieStyle.writeHeader}>
            <div className={WrtieStyle.writeHeaderWrap}>
                <textarea placeholder='제목을 입력하세요' className={WrtieStyle.writeHeaderTextarea} />
                <div className={WrtieStyle.writeHeaderLine} />
                <div className={WrtieStyle.writeHeaderTag} >
                    <input placeholder='태그를 입력하세요' className={WrtieStyle.writeHeaderTag} />
                </div>
            </div>
        </div>
    )
}

export default writeHeader
