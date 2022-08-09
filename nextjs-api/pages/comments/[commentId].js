import {comments} from '../../data/comments'

function Comment({comment}){
    return(
        <div>
            {comment.id}, {comment.text}
        </div>
    )
}

export default Comment

export async function getStaticPaths(){
    return {
        paths:[
            {params:{commentId:'1'}},
            {params:{commentId:'2'}},
            {params:{commentId:'3'}},
        ],
        fallback:false,
    }
}

export async function getStaticProps(context){
    const {params} = context
    const {commentId} = params

    const comment = comments.find((comment) => comment.id === parseInt(commentId))
    console.log(comment)

    //정적 데이터 또는 서버 측 데이터를 가져올 때에는 자신의 API 경로를 호출 하지 않을 것을 권장한다. 
    // Don't do this
    //const reponse = await fetch(`http:localhost:3000/api/comments/${commentId})
    //const data = await response.json()
    return{
        props:{
            comment,
        },
    }
}