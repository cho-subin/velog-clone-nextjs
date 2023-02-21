import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import dummy4 from"@/assets/images/dummyImg/dummy1.jpeg"


import detailCommentStyle from '@/styles/detail/sectionComment.module.css'
interface DATA{
  id:string;
  date:string;
  comment:string;
  profile:any;

}

interface IPros{
data:DATA
}

const articleComment :React.FC<IPros>= ({data}) => {
  const{id,date,comment,profile}=data
  
  return (
    <div className={detailCommentStyle.sectionComment}>
    <div className={detailCommentStyle.sectionCommentProfileWrap}>
        <div className={detailCommentStyle.sectionCommentProfile}>
            <Link href={'/'}>
                <Image src={profile} alt={''} className={detailCommentStyle.sectionCommentProfileImg} />
            </Link>
            <div className={detailCommentStyle.sectionCommentUser}>
                <div className={detailCommentStyle.sectionCommentId}>
                    <Link href={'/'}>{id}</Link>
                </div>
                <div className={detailCommentStyle.sectionCommentDate}>{date}</div>
            </div>
        </div>
    </div>
    <div className={detailCommentStyle.sectionCommentText}>
        <p>{comment}</p>
    </div>
    <div className={detailCommentStyle.sectionReplyCommentBtn}>
        <div className={detailCommentStyle.sectionReplyCommentBtnWrap}>
            <Image src={''} alt={''} className={detailCommentStyle.sectionReplyCommentIcon} />
            <span>n개의 답글</span>
        </div>
    </div>
</div>
  )
}

export default articleComment