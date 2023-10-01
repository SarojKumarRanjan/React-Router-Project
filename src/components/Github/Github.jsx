import { useState } from "react";
import { useEffect } from "react"



function Github() {

   
    const [data,setData] = useState([])
    useEffect( () => {

        

        fetch('https://api.github.com/users/SarojKumarRanjan')
        .then(res => res.json())
        .then(data => {
            
            setData(data)
        })

    },[])
  return (
    <div className="text-center p-4 bg-gray-500 text-white text-3xl">Github Repo count : {data.public_repos}
    
    <img width={300} className="m-5 p-4  " src={data.avatar_url} alt="git profile picture" />
     </div>
    
  )
}

export default Github

