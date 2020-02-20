

const modArray = ['hrs', 'min', 'sec', 'mil']

export const extractTimeUnit = (str, mod) => {
    // hrs, min, sec, mil
    // 00:00:00:000
    
    if(!str) { return '' }

    const strSplit = str.split(':')
    const modLocation = modArray.indexOf(mod)
console.log(strSplit[modLocation])
    return strSplit[modLocation]
}

export const buildTimeString = (timeValue, mod, originalString) => {
    
    if(!timeValue) { timeValue = '00' }

    timeValue = timeValue.trim()
    timeValue = timeValue.length < 2 ? '0' + timeValue : timeValue
    timeValue = mod === 'mil' ? '0' + timeValue : timeValue

    const modLocation = modArray.indexOf(mod)
    const timeArr = originalString.split(':')
    timeArr[modLocation] = timeValue

    return timeArr.join(':')
}
