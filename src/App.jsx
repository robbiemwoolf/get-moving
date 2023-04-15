import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Push from './pages/Push'
import Pull from './pages/Pull'
import Leg from './pages/Leg'
import Upper from './pages/Upper'
import Lower from './pages/Lower'

function App() {
    const [pushDone, setPushDone] = useState(false)
    const [pullDone, setPullDone] = useState(false)
    const [legDone, setLegDone] = useState(false)
    const [upperDone, setUpperDone] = useState(false)
    const [lowerDone, setLowerDone] = useState(false)

    return (
        <Routes>
            <Route path='/' element={<Home pushDone={pushDone} pullDone={pullDone} legDone={legDone} upperDone={upperDone} lowerDone={lowerDone}/>} />
            <Route path='/push' element={<Push setPushDone={setPushDone}/>} />
            <Route path='/pull' element={<Pull setPullDone={setPullDone}/>} />
            <Route path='/leg' element={<Leg setLegDone={setLegDone}/>} />
            <Route path='/upper' element={<Upper setUpperDone={setUpperDone}/>} />
            <Route path='/lower' element={<Lower setLowerDone={setLowerDone}/>} />
        </Routes>
    )
}

export default App
