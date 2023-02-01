import React from 'react'
import { useRouter } from 'next/router'

const Write = () => {

  const route = useRouter();
  console.log(route)

  return (
    <div>
      여기는 작성페이지
    </div>
  )
}

export default Write
