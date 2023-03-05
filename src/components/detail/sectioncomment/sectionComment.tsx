import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import detailCommentStyle from '@/styles/detail/sectionComment.module.css'

import ArticleComment from './articleComment/articleComment'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { DATA, getComments, updateComment } from '@/redux/slice/commentSlice'
import { useRouter } from 'next/router'

import DH from "@/assets/images/dummyImg/DHProfile.webp";
import EUN from "@/assets/images/dummyImg/EUNXINProfile.png";
import SB from "@/assets/images/dummyImg/SBProfile.png";

import dummy4 from "@/assets/images/dummyImg/dummy1.jpeg"

const SectionComment: React.FC = () => {

    const { current: DATAS, datas } = useAppSelector(state => state.comment)
    const dispatch = useAppDispatch()
    const router = useRouter();
    const { detail, title } = router.query

    const [comment, setComment] = useState<DATA[]>([])
    const [text, setText] = useState<string>('')
    
    const changeUrl = (title as string)?.replace(/\-/g, ' ')
    const id = (detail as string)?.slice(1)

    React.useEffect(() => {
        if (typeof title == 'string' && typeof id == 'string') {
            dispatch(getComments({ id, title: changeUrl }))
        }
        setComment(datas)
    }, [changeUrl, datas, dispatch, id, title])

    let now = new Date(); // 현재 날짜 및 시간
    let year = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();
    let commentDate = year + '년 ' + todayMonth + '월 ' + todayDate + '일'

    const sendComment = () => {
        dispatch(updateComment({
            postId: id,
            title: changeUrl,
            id: "subin",
            date: commentDate,
            comment: text,
            profile: SB,
        }))
    }

    return (
        <div className={detailCommentStyle.sectionComment}>
            <h4>n개의 댓글</h4>
            <div className={detailCommentStyle.sectionCommentWrap}>
                <div className={detailCommentStyle.sectionCommentTextArea}>
                    <textarea placeholder='댓글을 작성하세요' className={detailCommentStyle.commentTextArea}
                        onChange={(e) => { setText(e.target.value) }}/>
                    <div className={detailCommentStyle.sectionCommentBtnWrap}>
                        <button onClick={() => sendComment()}>댓글 작성</button>
                    </div>
                </div>
                <div className={detailCommentStyle.sectionCommentList}>
                    <div className={detailCommentStyle.sectionCommentListWrap}>
                        {DATAS.map((data, idx) => {
                            const { title, postId, ...etCdata } = data
                            return <ArticleComment key={postId + idx} data={etCdata} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionComment
