import React, { ChangeEvent } from 'react'

import type { NextPage } from "next"
import { useCallback, useState } from "react"
import { MDEditor } from "./mdAditor";
import WrtieStyle from '../../../styles/write/write.module.css'
import WriteSendSection from '@/components/write/writeSendSection';
import { useAppDispatch } from '@/redux/hook';
import { StateType } from '@/redux/slice/commentSlice';
import dummy1 from '@/assets/images/dummyImg/dummy1.jpeg'
import { updateDummyData } from '@/redux/slice/dummySlice';

const WriteArticle: NextPage = ({ }) => {
    
    const [value, setValue] = useState("당신의 이야기를 적어보세요...")

    const [title, setTitle] = useState<string>('')

    console.log('value', value)

    // const dispatch = useAppDispatch();

    const handleChange = useCallback((value?:string) => {
        setValue(value as string)
    }, [])

    console.log('value', value)

    const sendTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.target.value)
    }

    console.log('title', title)

    // const sendData = () => {
    //     dispatch(updateDummyData({
    //         cardImg: dummy1,
    //         title: title,
    //         text: value,
    //         writeDate: '2023년 2월 28일',
    //         numberOfComments: 1,
    //         profileImg: dummy1,
    //         nickname: 'subin',
    //         profileMsg: "프론트엔드 입니다",
    //         numberOfLike: 24,
    //     }))
    // }

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
            <div>
                <MDEditor
                    value={value}
                    onChange={handleChange}
                    height={580}
                    style={{ marginLeft: '3rem', marginRight: '3rem' }}
                />
            </div>
            <div className={WrtieStyle.writeSendSection}>
                <WriteSendSection title={title} value={value}/>
            </div>
        </div>
    )
}
export default WriteArticle
