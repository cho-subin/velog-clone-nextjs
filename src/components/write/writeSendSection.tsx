import { useAppDispatch } from '@/redux/hook'
import { StateType, updateDummyData } from '@/redux/slice/dummySlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import WrtieStyle from '../../styles/write/write.module.css'
import dummy1 from '@/assets/images/dummyImg/dummy1.jpeg'

interface IPROPS {
    title:string,
    value:string
}

const WriteSendSection: React.FC<IPROPS> = ({title, value}) => {

    const dispatch = useAppDispatch();

    // console.log('title1',title)

    const sendData = () => {
        dispatch(updateDummyData({
            cardImg: dummy1,
            title: title,
            text: value,
            writeDate: '2023년 2월 28일',
            numberOfComments: 1,
            profileImg: dummy1,
            nickname: 'subin',
            profileMsg: "프론트엔드 입니다",
            numberOfLike: 24,
            isLike: 'N'
        }))
    }

    return (
        <div className={WrtieStyle.writeSendSectionWrap}>
            <Link href={'/'}>
                <button className={WrtieStyle.writeSendSectionBtn}>
                    <Image src={''} alt={''} style={{ fontSize: '1.25rem', marginRight: '0.5rem' }} />
                    <span style={{ fontSize: '1.125rem' }}>나가기</span>
                </button>
            </Link>
            <div className={WrtieStyle.writeSendSectionWrap1}>
                <button className={WrtieStyle.writeSendSectionBtn1}>임시저장</button>
                <button className={WrtieStyle.writeSendSectionBtn2} onClick={sendData}>출간하기</button>
            </div>
        </div>
    )
}

export default WriteSendSection
