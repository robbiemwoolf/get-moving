import read from '../assets/read.svg'
import water from '../assets/water.svg'
import steps from '../assets/steps.svg'
import strength from '../assets/strength.svg'

const habits = [
    {
        name: 'read',
        details: 'Read for thirty minutes.',
        icon: read,
        alt: 'book',
        isComplete: false  
    },
    {
        name: 'water',
        details: 'Drink one gallon of water.',
        icon: water,
        alt: 'water droplet',
        isComplete: false  
    },
    {
        name: 'steps',
        details: 'Go outside. Take 15,000 steps.',
        icon: steps,
        alt: 'footsteps',
        isComplete: false  
    },
    {
        name: 'strength',
        details: 'Complete a strength routine.',
        icon: strength,
        alt: 'dumbbell',
        isComplete: false  
    }
]

export default habits