import React from 'react'
import detailCommentStyle from '@/styles/detail/sectionComment.module.css'

const writeReplyComment = () => {
  return (
    <div>
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
  )
}

export default writeReplyComment
