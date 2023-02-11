import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/header/header';
import detailStyle from '../../styles/detail.module.css'

const Detail = () => {

    const router = useRouter();
    const { detail:id, title } = router.query
    console.log(id, title)

    return (
        <div className={detailStyle.detail}>
            <Header/>
        </div>
    )
}

export default Detail
