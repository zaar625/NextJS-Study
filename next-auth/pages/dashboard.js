import { getSession, signIn } from "next-auth/react"
import {useState, useEffect} from 'react';

function Dashboard(){
   const [loading, setLoading] = useState(true);

   useEffect(()=>{
    const securePage = async()=>{
        const session = await getSession();
        // console.log(!session) => false 값이 나오네.
        if(!session){
            //next에서 제공하는 ui로 리다이렉션을 한다. 
            signIn()
        }else{
            setLoading(false)
        }
    }
    securePage();
   },[])

   if(loading){
    return <h2>Loading...</h2>
   }

    return <h1>Dashboard page</h1>
}

export default Dashboard