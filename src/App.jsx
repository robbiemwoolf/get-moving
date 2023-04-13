import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Push from './pages/Push'
import Pull from './pages/Pull'
import Leg from './pages/Leg'
import Upper from './pages/Upper'
import Lower from './pages/Lower'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/push' element={<Push />} />
            <Route path='/pull' element={<Pull />} />
            <Route path='/leg' element={<Leg />} />
            <Route path='/upper' element={<Upper />} />
            <Route path='/lower' element={<Lower />} />
        </Routes>
    )
}

export default App
