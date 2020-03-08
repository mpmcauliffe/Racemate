

export const reconstitute = str => {
    if (!str) { return [ ] }

    let setArr = str.split(':')

    if(setArr[0].includes(',')) {
        setArr = setArr.map(item => [item])
        setArr = setArr.map(item => item[0].split(','))
    }

    return setArr
}
