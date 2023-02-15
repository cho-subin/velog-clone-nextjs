import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import detailCommentStyle from '../../styles/detail/sectionComment.module.css'

const sectionComment = () => {
    return (
        <div className={detailCommentStyle.sectionComment}>
            <h4>n개의 댓글</h4>
            <div className={detailCommentStyle.sectionCommentWrap}>
                <div className={detailCommentStyle.sectionCommentTextArea}>
                    <textarea placeholder='댓글을 작성하세요' className={detailCommentStyle.commentTextArea} />
                    <div className={detailCommentStyle.sectionCommentBtnWrap}>
                        <button>댓글 작성</button>
                    </div>
                </div>
                <div className={detailCommentStyle.sectionCommentList}>
                    <div className={detailCommentStyle.sectionCommentListWrap}>
                        <div className={detailCommentStyle.sectionComment}>
                            <div className={detailCommentStyle.sectionCommentProfileWrap}>
                                <div className={detailCommentStyle.sectionCommentProfile}>
                                    <Link href={'/'}>
                                        <Image src={''} alt={''} className={detailCommentStyle.sectionCommentProfileImg} />
                                    </Link>
                                    <div className={detailCommentStyle.sectionCommentUser}>
                                        <div className={detailCommentStyle.sectionCommentId}>
                                            <Link href={'/'}>댓글ID</Link>
                                        </div>
                                        <div className={detailCommentStyle.sectionCommentDate}>1일 전</div>
                                    </div>
                                </div>
                            </div>
                            <div className={detailCommentStyle.sectionCommentText}>
                                <p>내용 입니다.</p>
                            </div>
                            <div className={detailCommentStyle.sectionReplyCommentBtn}>
                                <div className={detailCommentStyle.sectionReplyCommentBtnWrap}>
                                    <Image src={''} alt={''} className={detailCommentStyle.sectionReplyCommentIcon} />
                                    <span>n개의 답글</span>
                                </div>
                            </div>
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
                                <div className={detailCommentStyle.section2}></div>
                                <button className={detailCommentStyle.sectionReplyWriteBtn}>답글 작성하기</button>
                                <div className={detailCommentStyle.sectionReplyTextArea}>
                                    <textarea placeholder='댓글을 작성하세요' />
                                </div>
                                <div className={detailCommentStyle.sectionReplyBtnsWrap}>
                                    <button className={detailCommentStyle.sectionReplyCloseBtn}>취소</button>
                                    <button className={detailCommentStyle.sectionReplySendBtn}>댓글 작성</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sectionComment
