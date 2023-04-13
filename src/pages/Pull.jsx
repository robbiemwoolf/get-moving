import Card from '../tools/Card'
import Table from '../tools/Table'


export default function Pull() {
    let index = 1
    const plan = Table(index)
    const card = Card(index)

    return (
        <div className='container'>
            {card}
            {plan}
        </div>
    )
}