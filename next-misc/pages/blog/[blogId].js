import Head from 'next/head'

function Blog({title, description}){
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
            </Head>
            <h1 className='content'>
                {/* Env User {process.env.DB_USER} Password {process.env.DB_PASSWORD} - 클라이언트 화면에 보이지 않음*/}
                <h1>Env User {process.env.NEXT_PUBLIC_ANALYTICS_ID} 클라이언트 화면에 보임</h1> 
            </h1>
            
        </>
    )
}
export default Blog

export async function getServerSideProps(){
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    console.log(`Connecting to database with username ${user} and password ${password}`)
    return {
        props:{
            title:'Article Title',
            description:'Article description'
        }
    }
}