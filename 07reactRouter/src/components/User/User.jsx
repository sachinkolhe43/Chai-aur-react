import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function User() {

    const {userid} = useParams()
  return (
    <div className='bg-slate-800 text-3xl text-white text-center'>User : {userid}</div>
  )
}
