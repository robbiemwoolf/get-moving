import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Habits from '../habits/Habits'

export default function Home() {
    const days = ['Push', 'Pull', 'Leg', 'Upper', 'Lower']
    const [isComplete, setIsComplete] = useState(false)
    const toggle = isComplete ? 'complete' : null
    const cards = days.map((day) => {
        return (
            <Link to={day} key={day}>
                <button className={`dayBtn ${toggle}`}>{day} Day</button>
            </Link>
        )
    })

    return (
        <>
            <Habits />
            <div className='col'>
                {cards}
            </div>
        </>
    )
}