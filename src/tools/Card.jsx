import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../pages/card.css'
import back from '../assets/back.svg'
import fwd from '../assets/fwd.svg'
import complete from '../assets/complete.svg'
import plans from '../data/plans'

export default function Card(index) {
    const end = plans[index].exercises.length - 1
    const [count, setCount] = useState(0)

    const card = plans[index].exercises.map((exercise) => {
        const backBtn = <button className='btn' onClick={() => setCount((count) => count - 1)}><img src={back} /></button>
        const nextBtn = <button className='btn' onClick={() => setCount((count) => count + 1)}><img src={fwd} /></button>
        const finishBtn = <button className='btn'><Link to='/' ><img src={complete} /></Link></button>
        
        return (
            <div className='plan' key={exercise.id}>
                <div className='rowC'>{exercise.name}</div>
                <div className='rowC'>{exercise.sets} sets</div>
                <div className='rowC'>{exercise.reps} reps</div>
                <div className='rowC'>{exercise.weight} lbs</div>
                {(!count) ? null : backBtn}
                {(count === end) ? finishBtn : nextBtn}
            </div>
        )
    })

    return (
        <>
        {card[count]}
        </>
    )
}