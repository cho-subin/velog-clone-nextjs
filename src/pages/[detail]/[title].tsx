import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/header/header';
import DetailHeader from '../../components/detail/detailHeader';
import DetailArticle from '../../components/detail/detailArticle';
import SectionUser from '../../components/detail/sectionUser';
import SectionNevNext from '../../components/detail/sectionNevNext';
import SectionComment from '../../components/detail/sectionComment';

import detailStyle from '../../styles/detail/detail.module.css'
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { updateCurrent } from '@/redux/slice/dummySlice';

const Detail = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const { current: detailData } = useAppSelector((state) => state.getDummyData)

    const { detail, title } = router.query
    console.log(detail, title)

    const id = detail?.slice(1)

    const changeUrl = (title as string)?.replace(/\-/g, ' ')

    console.log('changeUrl1', changeUrl)
    console.log('detailData', detailData)

    useEffect(()=>{
        if(typeof title=='string' && typeof id=='string'){
            dispatch(updateCurrent({ title:changeUrl, id }))
            console.log('안뜨나')
        }
    },[])

    return (
        <div className={detailStyle.detail}>
            <Header/>
            <DetailHeader detailData={detailData}/>
            <DetailArticle detailData={detailData} />
            <SectionUser detailData={detailData} />
            <SectionNevNext/>
            <SectionComment/>
        </div>
    )
}

export default Detail
