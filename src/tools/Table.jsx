import '../pages/day.css'
import plans from '../data/plans'

export default function Table({index}) {
    const day = plans[index].day
    const list = plans[index].exercises.map((exercise) => {
        return (
            <div className='row' key={exercise.name}>
                <div className='cell exercise'>{exercise.name}</div>
                <div className='cell sets'>{exercise.sets}</div>
                <div className='cell reps'>{exercise.reps}</div>
                <div className='cell weight'>{exercise.weight}</div>
            </div>
        )
    })
    return (
        <>
            <h1 id={day}>{day} day</h1>
            {list}
        </>
    )
}