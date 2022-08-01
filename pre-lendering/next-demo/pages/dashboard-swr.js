import useSWR from "swr";

const fetcher = async()=>{
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
}

function DashboardSWR(){
    // 첫번째 인자는 요청에 대한 고유 키, 두번째 인자는 데이터를 가져오는 함수.
    const {data,error} = useSWR('dashboard',fetcher)

    if(error) return 'An error has occured'
    if(!data) return 'Loading'

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Posts-{data.posts}</h2>
            <h2>Likes-{data.likes}</h2>
            <h2>Followes-{data.followers}</h2>
            <h2>Following-{data.following}</h2>
        </div>
    )
}

export default DashboardSWR