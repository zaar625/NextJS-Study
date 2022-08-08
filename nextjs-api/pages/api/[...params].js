//44. catch all API Routes.
export default function handler(req, res){
    const params = req.query.params
    console.log(params)
    //예를 들어 [1,2,3] 과 같은 배열을 반환한다.
    res.status(200).json(params)
}