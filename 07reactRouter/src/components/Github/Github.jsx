import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData()
    console.log(data)
//  const [data,setData] = useState([])
//   useEffect(() => {
//         fetch('https://api.github.com/users/sachinkolhe43')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             setData(data)
//         })
//   }, [])
  
  return (
    <div className='text-center text-black text-3xl pt-8 font-serif'>Github Username : {data.login} 
    <div className='flex bg-white-800 p-9 justify-center '>
        <div className='w-96'>
        <img 
          className='border-red-600 rounded-3xl'
          src={data.avatar_url} 
          alt="Git Picture"  />

        </div>
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
        const response = await fetch("https://api.github.com/users/sachinkolhe43");
        return response.json()
 }