const plans = [
    { 
        day: 'push',
        exercises: [
            {
                id: 0,
                name: 'Flat DB Bench',
                sets: 2,
                reps: 4,
                weight: 33
            },
            {
                id: 1,
                name: 'Incline DB Bench',
                sets: 3,
                reps: 8,
                weight: 28
            },
            {
                id: 2,
                name: 'Chest Flies',
                sets: 3,
                reps: 8,
                weight: 10
            },
            {
                id: 3,
                name: 'Push Ups',
                sets: 3,
                reps: 'failure',
                weight: 'body'
            },
            {
                id: 4,
                name: 'DB Lateral Raises',
                sets: 3,
                reps: 12,
                weight: 10
            },
            {
                id: 5,
                name: 'Incline BB Skullcrushers',
                sets: 3,
                reps: 8,
                weight: 25.5
            },
            {
                id: 6,
                name: 'Cable Tricep Pushdowns',
                sets: 3,
                reps: 12,
                weight: 20
            }
        ]
    },
    {
        day: 'pull',
        exercises: [
            {
                id: 0,
                name: 'Seated Cable Rows - Heavy',
                sets: 2,
                reps: 4,
                weight: 105
            },
            {
                id: 1,
                name: 'Seated Cable Rows',
                sets: 2,
                reps: 10,
                weight: 75
            },
            {
                id: 2,
                name: 'Lat Pulldowns',
                sets: 3,
                reps: 8,
                weight: 45
            },
            {
                id: 3,
                name: 'Cable Lat Pullovers',
                sets: 2,
                reps: 16,
                weight: 20
            },
            {
                id: 4,
                name: 'Rear Delt Flies',
                sets: 3,
                reps: 12,
                weight: 5
            },
            {
                id: 5,
                name: 'Alternating DB Curl',
                sets: 2,
                reps: 8,
                weight: 13
            },
            {
                id: 6,
                name: 'Standing BB Curl SS Reverse',
                sets: 3,
                reps: 8,
                weight: 25.5
            }  
        ]
    },
    {
        day: 'leg',
        exercises: [
            {
                id: 0,
                name: 'BB Squat Heavy',
                sets: 2,
                reps: 5,
                weight: 85
            },
            {
                id: 1,
                name: 'BB Squat',
                sets: 2,
                reps: 8,
                weight: 60
            },
            {
                id: 2,
                name: 'DB Sumo Squat',
                sets: 3,
                reps: 10,
                weight: 25
            },
            {
                id: 3,
                name: 'Manual Hamstring Curl',
                sets: 3,
                reps: 'failure',
                weight: 'body'
            },
            {
                id: 4,
                name: 'Standing Calf Raises',
                sets: 4,
                reps: 12,
                weight: 'body'
            }  
        ]
    },
    {
        day: 'upper',
        exercises: [
            {
                id: 0,
                name: 'Bent Over BB Row',
                sets: 3,
                reps: 10,
                weight: 75
            },
            {
                id: 1,
                name: 'Lebert Dips',
                sets: 3,
                reps: 'failure',
                weight: 'body'
            },
            {
                id: 2,
                name: 'DB Arnold Press',
                sets: 3,
                reps: 8,
                weight: 18
            },
            {
                id: 3,
                name: 'Overhead DB Tricep Extension',
                sets: 3,
                reps: 10,
                weight: 18
            },
            {
                id: 4,
                name: 'Seated DB Hammer Curls',
                sets: 3,
                reps: 10,
                weight: 8
            },
            {
                id: 5,
                name: 'Cable Flies SS Reverse',
                sets: 3,
                reps: 10,
                weight: 25.5
            } 
        ]
    },
    {
        day: 'lower',
        exercises: [
            {
                id: 0,
                name: 'BB Squat - Drop Set',
                sets: 10,
                reps: 10,
                weight: 60
            },
            {
                id: 1,
                name: 'Manual Hamstring Curl',
                sets: 3,
                reps: 'failure',
                weight: 'body'
            },
            {
                id: 2,
                name: 'Standing Calf Raises',
                sets: 3,
                reps: 12,
                weight: 'body'
            } 
        ]
    }
]

export default plans