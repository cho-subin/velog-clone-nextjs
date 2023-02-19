import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import detailCommentStyle from '@/styles/detail/sectionComment.module.css'

import ArticleComment from './articleComment/articleComment'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { getComments } from '@/redux/slice/commentSlice'
import { useRouter } from 'next/router'

import dummy4 from"@/assets/images/dummyImg/dummy1.jpeg"

const SectionComment:React.FC = () => {

    const{current:DATAS}=useAppSelector(state=>state.comment)
    const dispatch=useAppDispatch()
    const router = useRouter();
    const { detail, title } = router.query
    const id = detail?.slice(1)

   

    const changeUrl = (title as string)?.replace(/\-/g, ' ')
    console.log(router)
    React.useEffect(()=>{
        if(typeof title=='string' && typeof id=='string'){
            dispatch(getComments({id,title:changeUrl}))
}
    },[])

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
                       {DATAS.map((data,idx)=>{
                       const {title,postId, ...etCdata}=data
                       return <ArticleComment key={postId+idx} data={etCdata} />})}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionComment
