import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


import detailCommentStyle from '@/styles/detail/sectionComment.module.css'
interface DATA{
  id:string;
  date:string;
  comment:string;
  profile:any;

}

interface IPros{
data?:DATA
}

const articleComment :React.FC<IPros>= ({data}) => {
  // const{id,date,comment,profile}=data
  
  return (
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
  )
}

export default articleComment