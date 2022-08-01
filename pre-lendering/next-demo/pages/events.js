//38. pre-rendering + Client side data fetching.
//useRouter를 사용하지 않고 fetchSortsEvents 이벤트 실행 시 url이 변경이 안된다. 이점은 seo에 불리할 수 있다.
//따라서 해당 아래 코드는 이벤트 발생시 해당 url를 부여하여 seo에 최적화 되게 한 것이다. 

import {useState} from 'react'
import {useRouter} from 'next/router'

function EventList({eventList}) {
    const [events, setEvents] = useState(eventList)
    const router = useRouter()
    const fetchSortsEvents = async()=> {
        const response = await fetch(`http://localhost:4000/events?category=sports`)
        const data = await response.json()
        setEvents(data)
        router.push('/events?category=sports', undefined, {shallow:true})
    }
    return (
        <>
        <button onClick={fetchSortsEvents}>Sports Events</button>
            <h1>List of events</h1>
            {
                events.map(event => {
                    return(
                        <div key={event.id}>
                            <h2>
                                {event.id} {event.title} {event.data} | {event.category}
                            </h2>
                            <p>{event.description}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}
export default EventList

export async function getServerSideProps(context){
    const {query} = context
    const {category} = query
    const queryString = category ? 'category=sports': ''
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()

    return {
        props:{
            eventList:data,
        }
    }
}