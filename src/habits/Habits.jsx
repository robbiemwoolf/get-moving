import { useState } from 'react'
import './Habits.css'
import habits from '../data/habits'

export default function Habits() {

    const habitBtns = habits.map((habit) => {
        const [isComplete, setIsComplete] = useState(false)
        const handleClick = () => {setIsComplete(!isComplete)}
        const toggle = isComplete ? 'complete' : null
        return (
            <button className={`daily ${toggle}`} onClick={handleClick} key={habit.name}><img src={habit.icon} alt={habit.alt} key={habit.name} /></button> 
        )
    })

    return (
        <div className='habits'> 
            {habitBtns}
        </div>
    )
}