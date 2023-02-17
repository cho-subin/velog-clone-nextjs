import { StateType } from '@/redux/slice/dummySlice'
import React from 'react'
import detailArticleStyle from '../../styles/detail/detailArticle.module.css'
interface IPROPS {
    detailData: StateType
}

const detailArticle: React.FC<IPROPS> = ({ detailData }) => {
    console.log()
    return (
        <div className={detailArticleStyle.detailArticle} >
            <div className={detailArticleStyle.detailArticleWrap}>
                <div className={detailArticleStyle.detailArticleLists}>
                    <p>{detailData?.text}</p>
                    <ul>
                        <li>
                            안녕
                        </li>
                        <li>
                            안녕1
                        </li>
                    </ul>
                    <blockquote>
                        여기에 주목해주세요👀
                    </blockquote>
                    <br/>
                    <h2>🐣마크다운 그거 어떻게 하는건데....</h2>
                    <h3>🐣마크다운 그거 어떻게 하는건데....</h3>
                    <h4>🐣마크다운 그거 어떻게 하는건데....</h4>
                    <pre>
                        <code>
                            <span>const b = a</span>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default detailArticle
