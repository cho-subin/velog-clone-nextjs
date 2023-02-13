import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/header/header';
import DetailHeader from '../../components/detail/detailHeader';
import detailStyle from '../../styles/detail/detail.module.css'

const Detail = () => {

    const router = useRouter();
    const { detail:id, title } = router.query
    console.log(id, title)

    return (
        <div className={detailStyle.detail}>
            <Header/>
            <DetailHeader/>
        </div>
    )
}

export default Detail
