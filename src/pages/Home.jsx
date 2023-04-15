import { Link } from 'react-router-dom'
import './Home.css'
import Habits from '../habits/Habits'


export default function Home({pushDone, pullDone, legDone, upperDone, lowerDone}) {

    const pushToggle = pushDone ? 'complete' : null
    const pullToggle = pullDone ? 'complete' : null
    const legToggle = legDone ? 'complete' : null
    const upperToggle = upperDone ? 'complete' : null
    const lowerToggle = lowerDone ? 'complete' : null

    return (
        <>
            <Habits />
            <div className='col'>
                <Link to='push'>
                    <button className={`dayBtn ${pushToggle}`}>push</button>
                </Link>
                <Link to='pull'>
                    <button className={`dayBtn ${pullToggle}`}>pull</button>
                </Link>
                <Link to='leg'>
                    <button className={`dayBtn ${legToggle}`}>leg</button>
                </Link>
                <Link to='upper'>
                    <button className={`dayBtn ${upperToggle}`}>upper</button>
                </Link>
                <Link to='lower'>
                    <button className={`dayBtn ${lowerToggle}`}>lower</button>
                </Link>
            </div>
        </>
    )
}