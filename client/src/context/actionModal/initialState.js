
// export const _setRepSelection_      = '_setRepSelection_'
// export const _setWeightSelection_   = '_setWeightSelection_'
// export const _setNumberOfSets_      = '_setNumberOfSets_'

export const defaultState = {
    numberOfSets: '4',

    repSelection: 'low',
    optButtonsReps: ['low', 'medium', 'high'],
    repRange: '4-8',
    repRangeEnum: ['4-8', '9-18', '19-50'],
    rangeValue: '8',
    defaultStartEnum: ['8', '12', '30'],
    actualNumberOfReps: [ ],

    weightSelection: false,
    optButtonsWeight: ['no', 'yes'],

    startingWeight: '10',
    repSteps: '2.5',

    baseSets: [...Array(4)].map(emptySet => { return [...Array(8).fill('x')] }),
}
