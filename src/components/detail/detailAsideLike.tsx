import React from 'react'
import detailHeaderStyle from '../../styles/detail/detailHeader.module.css'
import iconImage from '@/assets/images/icon'

const detailAsideLike = () => {
    return (
        <div className={detailHeaderStyle.asideLike}>
            <div className={detailHeaderStyle.asideLikeWrap}>
                <div className={detailHeaderStyle.asideLikebg}>
                    <div className={detailHeaderStyle.likeIcon}>
                        <iconImage.like alt='like' />
                    </div>
                    <div className={detailHeaderStyle.likeCount}>20</div>
                    <div className={detailHeaderStyle.likeIcon}>
                        <iconImage.like alt='share' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default detailAsideLike
