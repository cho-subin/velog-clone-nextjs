import React from 'react'

import type { NextPage } from "next"
import { useCallback, useState } from "react"
import { Editor } from "./mdAditor";

type DraftPageProps = {
}

const WriteArticle: NextPage<DraftPageProps> = ({

}) => {
    const [value, setValue] = useState("당신의 이야기를 적어보세요...")

    const handleChange = useCallback((value:any) => {
        setValue(value)
    }, [])

    return (
        <div>
            <Editor
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}
export default WriteArticle
