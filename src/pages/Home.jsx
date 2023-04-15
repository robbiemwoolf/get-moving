import { Link } from 'react-router-dom'
import './Home.css'
import habits from '../data/habits'


export default function Home({pushDone, pullDone, legDone, upperDone, lowerDone, zeroDone, oneDone, twoDone, threeDone, setZeroDone, setOneDone, setTwoDone, setThreeDone}) {

    const zeroToggle = zeroDone ? 'complete' : null
    const oneToggle = oneDone ? 'complete' : null
    const twoToggle = twoDone ? 'complete' : null
    const threeToggle = threeDone ? 'complete' : null

    const pushToggle = pushDone ? 'complete' : null
    const pullToggle = pullDone ? 'complete' : null
    const legToggle = legDone ? 'complete' : null
    const upperToggle = upperDone ? 'complete' : null
    const lowerToggle = lowerDone ? 'complete' : null

    return (
        <>
            <div className='habits'> 
                <button className={`daily ${zeroToggle}`} onClick={() => {setZeroDone(!zeroDone)}} key={habits[0].name}><img src={habits[0].icon} alt={habits[0].alt} /></button> 
                <button className={`daily ${oneToggle}`} onClick={() => {setOneDone(!oneDone)}} key={habits[1].name}><img src={habits[1].icon} alt={habits[1].alt} /></button> 
                <button className={`daily ${twoToggle}`} onClick={() => {setTwoDone(!twoDone)}} key={habits[2].name}><img src={habits[2].icon} alt={habits[2].alt} /></button> 
                <button className={`daily ${threeToggle}`} onClick={() => {setThreeDone(!threeDone)}} key={habits[3].name}><img src={habits[3].icon} alt={habits[3].alt} /></button> 
            </div>
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