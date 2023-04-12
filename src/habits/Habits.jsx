import { useState } from 'react'
import './Habits.css'
import riceBucket from '../assets/bucket.svg'
import water from '../assets/water.svg'
import steps from '../assets/steps.svg'
import strength from '../assets/strength.svg'

export default function Habits() {
    // habit states
    const [riceIsComplete, riceSetIsComplete] = useState(false)
    const [waterIsComplete, waterSetIsComplete] = useState(false)
    const [stepsIsComplete, stepsSetIsComplete] = useState(false)
    const [strengthIsComplete, strengthSetIsComplete] = useState(false)

    // onClick handlers
    const riceHandleClick = () => {riceSetIsComplete(!riceIsComplete)}
    const waterHandleClick = () => {waterSetIsComplete(!waterIsComplete)}
    const stepsHandleClick = () => {stepsSetIsComplete(!stepsIsComplete)}
    const strengthHandleClick = () => {strengthSetIsComplete(!strengthIsComplete)}

    // className 'complete' toggle
    const riceToggle = riceIsComplete ? 'complete' : null
    const waterToggle = waterIsComplete ? 'complete' : null
    const stepsToggle = stepsIsComplete ? 'complete' : null
    const strengthToggle = strengthIsComplete ? 'complete' : null

    return (
        <div className='habits'> 
            <button className={`daily ${riceToggle}`} onClick={riceHandleClick}><img src={riceBucket} alt='rice bucket' /></button>
            <button className={`daily ${waterToggle}`} onClick={waterHandleClick}><img src={water} alt='water droplet' /></button>
            <button className={`daily ${stepsToggle}`} onClick={stepsHandleClick}><img src={steps} alt='footsteps' /></button>
            <button className={`daily ${strengthToggle}`} onClick={strengthHandleClick}><img src={strength} alt='dumbbell' /></button>
        </div>
    )
}