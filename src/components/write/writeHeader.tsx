import React, { ChangeEvent, useState } from 'react'
import WrtieStyle from '../../styles/write/write.module.css'

const WriteHeader: React.FC = () => {
    const [title, setTitle] = useState<string>('')

    const sendTitle = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.target.value)
    }

    console.log('title', title)

    return (
        <div className={WrtieStyle.writeHeader}>
            <div className={WrtieStyle.writeHeaderWrap}>
                <textarea placeholder='제목을 입력하세요' className={WrtieStyle.writeHeaderTextarea} value={title}
                    onChange={sendTitle}/>
                <div className={WrtieStyle.writeHeaderLine} />
                <div className={WrtieStyle.writeHeaderTag} >
                    <input placeholder='태그를 입력하세요' className={WrtieStyle.writeHeaderTag} />
                    <div className={WrtieStyle.writeHeaderTagDiv}></div>
                </div>
            </div>
        </div>
    )
}

export default WriteHeader
