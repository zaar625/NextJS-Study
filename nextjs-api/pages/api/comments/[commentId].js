//44.Dynamic API Routes.
import { comments } from "../../../data/comments";

export default function handler(req, res){
    const {commentId} = req.query

    if(req.method === 'GET'){
        // console.log(req.query)
        const comment = comments.find(
            (comment)=>comment.id === parseInt(commentId)
        )
        res.status(200).json(comment)
    }else if(req.method === 'DELETE'){
        const deletedComment = comments.find(
            (comment) => comment.id === parseInt(commentId)
        )
        const index = comments.findIndex(
            (comment)=> comment.id === parseInt(commentId)
        )
        comments.splice(index, 1)
        res.status(200).json(deletedComment)
    }
}
