import {useRouter} from 'next/router'
function Post({post}){
    const router = useRouter();

    if(router.isFallback){
        return <h1>Loading...</h1>
    }
    return (
        <>
            <h2> {post.id} {post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}
export default Post

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    // const paths = data.map(post => {
    //     return {
    //         params:{
    //             postId:`${post.id}`
    //         }
    //     }
    // })
    return {
        paths:[
            {
                params: {postId: '1'},
            },
            {
                params: {postId: '2'},
            },
            {
                params: {postId: '3'},
            },
        ],
        // paths,
        fallback: 'blocking',
    }
}

export async function getStaticProps(context){
    const {params} = context
    // console.log(params)
    const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    // 아래 코드를 입력 하지 않을 경우 흰 화면이 나온다. 아래코드를 입력하면, 404페이지가 나온다.
    if(!data.id) {
        return {
            notFound:true,
        }
    }

    console.log(`Generating page for /post/${params.postId}`)

    return {
        props:{
            post: data,
        },
    }
}