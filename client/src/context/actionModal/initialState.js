import Moment from 'moment'

export const defaultState = {
    /*************
    / GLOBAL
    **************/
    changeOptionBin: ['no', 'yes'],

    /*************
    / ACTION STATE
    **************/
    numberOfSets: '4',
    spoolInputArray: [...Array(50)].map((_, i) => i+1),

    repValue: '8',

    weightSelection: false,

    currentWeight: '10',
    weightSteps: '.5',

    changeOptionReps: [ ],
    changeOptionWeight: [ ],

    baseSets: [ ],


    /*************
    / TIME STATE
    **************/
    hoursMinutes: [...Array(61)].map((_, i) => i),
    manualTime: {
        hours: '',
        minutes: ''
    },
    timeDistanceArray: [ ],
    isDistanceExercise: false,
    optBtnDistanceUnit: ['miles', 'kilometers', 'laps'],
    distUnitSelction: 'miles',

    // date for date today
    date: Moment().format('YYYY-MM-D'),
}
//[...Array(4)].map(() => false)yyyy-MM-dd