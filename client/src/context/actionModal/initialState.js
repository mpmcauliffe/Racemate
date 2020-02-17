
export const defaultState = {
    numberOfSets: '4',
    spoolInputArray: [...Array(49)].map((_, i) => i+1),

    repValue: '8',

    weightSelection: false,
    optButtonsWeight: ['no', 'yes'],

    currentWeight: '10',
    weightSteps: '.5',

    changeOptionReps: [ ],
    changeOptionWeight: [ ],

    baseSets: [ ],
}
//[...Array(4)].map(() => false)