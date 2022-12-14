import { getSession } from "next-auth/react";

function Blog({data}){
    return <h1>Blog page - {data}</h1>
}

export default Blog

export async function getServerSideProps(context){
    const session = await getSession(context)

    if(!session){
        return {
            redirect: {
                destination:`/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
                permanent:false,
            }
        }
    }

    return {
        props: {
            data : session ? 'List of 100 perzonalized' : 'List of free blogs',
        }
    }
}