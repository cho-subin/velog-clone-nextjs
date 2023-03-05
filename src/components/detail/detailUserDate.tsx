import { StateType } from '@/redux/slice/dummySlice'
import Link from 'next/link'
import React, { useEffect } from 'react'
import detailHeaderStyle from '../../styles/detail/detailHeader.module.css'

interface IPROPS {
    detailData: StateType
}

const DetailUserDate: React.FC<IPROPS> = ({ detailData }) => {

    const writeDate = detailData?.writeDate
    
    let dateArray:RegExpMatchArray | null = writeDate?.match(/\d+/g);

    let stringYear = (dateArray as RegExpMatchArray)[0] + '-' + (dateArray as RegExpMatchArray)[1] + '-' + (dateArray as RegExpMatchArray)[2]
    
    console.log('dateArray', dateArray)
    console.log('sliceYear', stringYear)

    let changeTime=(date:string) => {
        const start = new Date(date);
        const end = new Date();

        const diff = ((+end) - (+start)) / 1000; // 경과 시간 구하기 (밀리초 기본으로 빼주기)

        const times = [
            // { name: '년', milliSeconds: 60 * 60 * 24 * 365 },
            // { name: '개월', milliSeconds: 60 * 60 * 24 * 30 },
            { name: '일', milliSeconds: 60 * 60 * 24 },
            { name: '시간', milliSeconds: 60 * 60 },
            { name: '분', milliSeconds: 60 },
        ];

        // 년 단위부터 알맞는 단위 찾기
        for (const value of times) {
            const betweenTime = Math.floor(diff / value.milliSeconds);
            console.log('betweenTime', betweenTime)

            // 큰 단위는 0보다 작은 소수점 값이 나옴
            if (betweenTime > 0 && betweenTime < 8) {
                return `${betweenTime}${value.name} 전`;
            }
            else if (betweenTime > 7){
                return stringYear
            }
        }
        return '방금 전';
    }

    const date = changeTime(stringYear);
    console.log('date',date)

    return (
        <div className={detailHeaderStyle.detailUserDate}>
            <div className={detailHeaderStyle.UserDateWrap}>
                <span className={detailHeaderStyle.detailUserId}>
                    <Link href={'/'}>
                        {detailData?.nickname}
                    </Link>
                </span>
                <span className={detailHeaderStyle.separator}>·</span>
                <span className={detailHeaderStyle.detailDate}>{date}</span>
            </div>
        </div>
  )
}

export default DetailUserDate
