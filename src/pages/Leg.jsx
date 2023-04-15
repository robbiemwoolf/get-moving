import { useNavigate } from 'react-router-dom'
import Table from '../tools/Table'
import Card from '../tools/Card'
import '../pages/card.css'


export default function Leg({setLegDone}) {
    let index = 2
    const nav = useNavigate()

    const handleClick = () => {
        setLegDone(true)
        nav('/')
    }

    return (
        <div className='container'>
            <Card handleClick={handleClick} index={index}/>
            <Table index={index} />
        </div>
    )
}