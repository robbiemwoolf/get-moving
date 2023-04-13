const plans = [
    { 
        day: 'push',
        exercises: [
            {
                name: 'Flat DB Bench',
                sets: 2,
                reps: 4,
                weight: 33
            },
            {
                name: 'Incline DB Bench',
                sets: 3,
                reps: 8,
                weight: 28
            },
            {
                name: 'Chest Flies',
                sets: 3,
                reps: 8,
                weight: 10
            },
            {
                name: 'Push Ups',
                sets: 3,
                reps: 'failure',
                weight: 'body'
            },
            {
                name: 'DB Lateral Raises',
                sets: 3,
                reps: 12,
                weight: 10
            },
            {
                name: 'Incline BB Skullcrushers',
                sets: 3,
                reps: 8,
                weight: 25.5
            },
            {
                name: 'Cable Tricep Pushdowns',
                sets: 3,
                reps: 12,
                weight: 20
            }
        ]
    },
    {
        day: 'pull',
        exercise: [
            {
                name: 'Seated Cable Rows - Heavy',
                sets: 2,
                reps: 4,
                weight: 105
            },
            {
                name: 'Seated Cable Rows',
                sets: 2,
                reps: 10,
                weight: 75
            },
            {
                name: 'Lat Pulldowns',
                sets: 3,
                reps: 8,
                weight: 45
            },
            {
                name: 'Cable Lat Pullovers',
                sets: 2,
                reps: 16,
                weight: 20
            },
            {
                name: 'Rear Delt Flies',
                sets: 3,
                reps: 12,
                weight: 5
            },
            {
                name: 'Alternating DB Curl',
                sets: 2,
                reps: 8,
                weight: 13
            },
            {
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
                name: 'BB Squat Heavy',
                sets: 2,
                reps: 5,
                weight: 85
            },
            {
                name: 'BB Squat',
                sets: 2,
                reps: 8,
                weight: 60
            },
            {
                name: 'DB Sumo Squat',
                sets: 3,
                reps: 10,
                weight: 25
            },
            {
                name: 'Manual Hamstring Curl',
                sets: 3,
                reps: 'failure',
                weight: 'body'
            },
            {
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
                name: 'Bent Over BB Row',
                sets: 3,
                reps: 10,
                weight: 75
            },
            {
                name: 'Lebert Dips',
                sets: 3,
                reps: 'failure',
                weight: 'body'
            },
            {
                name: 'DB Arnold Press',
                sets: 3,
                reps: 8,
                weight: 18
            },
            {
                name: 'Overhead DB Tricep Extension',
                sets: 3,
                reps: 10,
                weight: 18
            },
            {
                name: 'Seated DB Hammer Curls',
                sets: 3,
                reps: 10,
                weight: 8
            },
            {
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
                name: 'BB Squat - Drop Set',
                sets: 10,
                reps: 10,
                weight: 60
            },
            {
                name: 'Manual Hamstring Curl',
                sets: 3,
                reps: 'failure',
                weight: 'body'
            },
            {
                name: 'Standing Calf Raises',
                sets: 3,
                reps: 12,
                weight: 'body'
            } 
        ]
    }
]

export default plans