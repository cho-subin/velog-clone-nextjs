import React from 'react'
import WirtePreview from './wirtePreview'

import WrtieStyle from '../../styles/write/write.module.css'

const writeRight = () => {
    return (
        <div className={WrtieStyle.writeRight}>
            <WirtePreview/>
        </div>
    )
}

export default writeRight
