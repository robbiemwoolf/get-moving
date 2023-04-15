import { useNavigate } from 'react-router-dom'
import Table from '../tools/Table'
import Card from '../tools/Card'
import '../pages/card.css'


export default function Pull({setPullDone}) {
    let index = 1
    const nav = useNavigate()

    const handleClick = () => {
        setPullDone(true)
        nav('/')
    }

    return (
        <div className='container'>
            <Card handleClick={handleClick} index={index}/>
            <Table index={index} />
        </div>
    )
}