import { useState } from 'react'
import './Habits.css'
import habits from '../data/habits'

export default function Habits() {
    const [zeroDone, setZeroDone] = useState(false)
    const [oneDone, setOneDone] = useState(false)
    const [twoDone, setTwoDone] = useState(false)
    const [threeDone, setThreeDone] = useState(false)

    const zeroToggle = zeroDone ? 'complete' : null
    const oneToggle = oneDone ? 'complete' : null
    const twoToggle = twoDone ? 'complete' : null
    const threeToggle = threeDone ? 'complete' : null
    
    return (
        <div className='habits'> 
            <button className={`daily ${zeroToggle}`} onClick={() => {setZeroDone(!zeroDone)}} key={habits[0].name}><img src={habits[0].icon} alt={habits[0].alt} /></button> 
            <button className={`daily ${oneToggle}`} onClick={() => {setOneDone(!oneDone)}} key={habits[1].name}><img src={habits[1].icon} alt={habits[1].alt} /></button> 
            <button className={`daily ${twoToggle}`} onClick={() => {setTwoDone(!twoDone)}} key={habits[2].name}><img src={habits[2].icon} alt={habits[2].alt} /></button> 
            <button className={`daily ${threeToggle}`} onClick={() => {setThreeDone(!threeDone)}} key={habits[3].name}><img src={habits[3].icon} alt={habits[3].alt} /></button> 
        </div>
    )
}