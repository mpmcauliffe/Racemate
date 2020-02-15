
export const defaultState = {
    numberOfSets: '4',

    rangeValue: '8',

    weightSelection: false,
    optButtonsWeight: ['no', 'yes'],

    weightSteps: '.5',

    baseSets: [...Array(4).fill('8')]
}
//[...Array(4)].map(emptySet => { return [...Array(8).fill('x')] }),