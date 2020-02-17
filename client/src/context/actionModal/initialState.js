import Moment from 'moment'

export const defaultState = {
    // sets reps and weights
    numberOfSets: '4',
    spoolInputArray: [...Array(50)].map((_, i) => i+1),

    repValue: '8',

    weightSelection: false,
    optButtonsWeight: ['no', 'yes'],

    currentWeight: '10',
    weightSteps: '.5',

    changeOptionReps: [ ],
    changeOptionWeight: [ ],

    baseSets: [ ],

    // date for date today
    date: Moment().format('YYYY-MM-D'),
}
//[...Array(4)].map(() => false)yyyy-MM-dd