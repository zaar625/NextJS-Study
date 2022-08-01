function ArticleListByCategory({articles, category}){
    return (
        <>
            <h1>
                Showing news for category <i>{category}</i>
            </h1>
            {
                articles.map(article => {
                    return (
                        <div key={article.id}>
                            <h2>
                                {article.id} {article.title}
                            </h2>
                            <p>{article.description}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )

}
export default ArticleListByCategory

export async function getServerSideProps(context){
    const {params,req,res, query} = context;
    res.setHeader('Set-Cookie',['name=Vishwas'])
    const {category} = params
    const reponse = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await reponse.json()

    console.log(`pre-rendering News Articles for category ${category}`)
    return {
        props:{
            articles:data,
            category,
        }
    }
}