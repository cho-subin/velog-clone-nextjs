import React, { useEffect, useState } from 'react'
import detailHeaderStyle from '../../styles/detail/detailHeader.module.css'
import iconImage from '@/assets/images/icon'
import { StateType } from '@/redux/slice/commentSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { addLike, removeLike } from '@/redux/slice/dummySlice';

interface IPROPS {
    numberOfLike: number
}

const DetailAsideLike: React.FC<IPROPS> = ({ numberOfLike }) => {

    const [trueLike, setTrueLike] = useState(false)

    const { isLike } = useAppSelector((state)=>state.getDummyData.current)

    console.log('detailData1', numberOfLike)
    console.log('detailData?.numberOfLike', numberOfLike)
    console.log('isLike', isLike)

    const dispatch = useAppDispatch();

    const clickLike = () => {
        if (isLike=='N'){
            dispatch(addLike({ like: 1, trueLike: 'Y' }))
        }
        else if (isLike == 'Y') {
            dispatch(removeLike({ like: 1, trueLike: 'N' }))
        }
    }

    return (
        <div className={detailHeaderStyle.asideLike}>
            <div className={detailHeaderStyle.asideLikeWrap}>
                <div className={detailHeaderStyle.asideLikebg}>
                    <div className={isLike == 'N' ? (detailHeaderStyle.likeIcon) : (detailHeaderStyle.likeIconActive)}
                    onClick={() => clickLike()}>
                        <iconImage.like alt='like' />
                    </div>
                    <div className={detailHeaderStyle.likeCount}>{numberOfLike}</div>
                    <div className={detailHeaderStyle.likeIcon}>
                        <iconImage.like alt='share' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DetailAsideLike
