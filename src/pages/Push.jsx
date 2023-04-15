import { useNavigate } from 'react-router-dom'
import Table from '../tools/Table'
import Card from '../tools/Card'
import '../pages/card.css'


export default function Push({setPushDone}) {
    let index = 0
    const nav = useNavigate()

    const handleClick = () => {
        setPushDone(true)
        nav('/')
    }

    return (
        <div className='container'>
            <Card handleClick={handleClick} index={index}/>
            <Table index={index} />
        </div>
    )
}