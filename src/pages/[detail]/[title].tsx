import React from 'react'
import { useRouter } from 'next/router'

const Detail = () => {
    const route = useRouter();
    console.log(route)

    return (
        <div>
            여기는 상세페이지
        </div>
    )
}

export default Detail
