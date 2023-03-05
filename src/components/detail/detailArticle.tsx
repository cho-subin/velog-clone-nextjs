import { StateType } from '@/redux/slice/dummySlice'
import React from 'react'
import detailArticleStyle from '../../styles/detail/detailArticle.module.css'
import { MDEditor } from '../write/writeArticle/mdAditor'
import MarkdownPreview from '@uiw/react-markdown-preview';
interface IPROPS {
    detailData: StateType
}

const detailArticle: React.FC<IPROPS> = ({ detailData }) => {
    console.log('detailData',detailData.text)
    return (
        <div className={detailArticleStyle.detailArticle} >
            <div className={detailArticleStyle.detailArticleWrap}>
                <div className={detailArticleStyle.detailArticleLists}>
                    <div data-color-mode="light">
                        <MarkdownPreview
                            style={{ padding: 10 }}
                            source={detailData?.text}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default detailArticle
