import React from 'react'

import type { NextPage } from "next"
import { useCallback, useState } from "react"
import { MDEditor } from "./mdAditor";

const WriteArticle: NextPage = ({ }) => {
    const [value, setValue] = useState("당신의 이야기를 적어보세요...")

    const handleChange = useCallback((value?:string) => {
        setValue(value as string)
    }, [])

    console.log('value', value)

    return (
        <div>
            <MDEditor
                value={value}
                onChange={handleChange}
                height={580}
                style={{ marginLeft: '3rem', marginRight: '3rem' }}
            />
        </div>
    )
}
export default WriteArticle
