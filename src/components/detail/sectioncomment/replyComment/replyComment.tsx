import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import detailCommentStyle from '@/styles/detail/sectionComment.module.css'

import WriteReplyComment from './writeReplyComment'

const replyComment = () => {
    return (
        <div className={detailCommentStyle.sectionReplyCommentList}>
            <div className={detailCommentStyle.section}></div>
            <div className={detailCommentStyle.sectionReplyCommentWrap}>
                <div className={detailCommentStyle.sectionReplyComment}>
                    <div className={detailCommentStyle.sectionReplyCommentProfileWrap}>
                        <div className={detailCommentStyle.sectionReplyCommentProfile}>
                            <Link href={'/'}>
                                <Image src={''} alt={''} className={detailCommentStyle.sectionReplyCommentProfileImg}></Image>
                            </Link>
                            <div className={detailCommentStyle.sectionReplyCommentUser}>
                                <div className={detailCommentStyle.sectionReplyCommentId}>
                                    <Link href={'/'}>답글 ID</Link>
                                </div>
                                <div className={detailCommentStyle.sectionReplyCommentDate}>3일 전</div>
                            </div>
                        </div>
                    </div>
                    <div className={detailCommentStyle.sectionReplyCommentText}>
                        <p>내용 입니다.</p>
                    </div>
                    <div className={detailCommentStyle.sectionReplyCommentBtn}>
                        <div className={detailCommentStyle.sectionReplyCommentBtnWrap}>
                            <Image src={''} alt={''} className={detailCommentStyle.sectionReplyCommentIcon} />
                            <span>답글 달기</span>
                        </div>
                    </div>
                </div>
            </div>
            <WriteReplyComment/>
        </div>
    )
}

export default replyComment
