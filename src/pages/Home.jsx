import { Link } from 'react-router-dom'
import './Home.css'
import Habits from '../habits/Habits'

export default function Home() {
    const days = ['Push', 'Pull', 'Leg', 'Upper', 'Lower']
    const card = days.map((day) => {
        return (
            <Link to={day} key={day}>
                <button className='dayBtn'>{day} Day</button>
            </Link>
        )
    })

    return (
        <>
            <Habits />
            <div className='col'>
                {card}
            </div>
        </>
    )
}