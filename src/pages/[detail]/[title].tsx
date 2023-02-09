import React from 'react'
import { useRouter } from 'next/router'

const Detail = () => {

    const router = useRouter();
    const { detail:id, title } = router.query
    console.log(id, title)

    return (
        <div>
            여기는 상세페이지
        </div>
    )
}

export default Detail
