

const oneMonth:Date = new Date('06/27/2020')


const secondMonth:Date = new Date('06/27/2021')


function diffDays(oneMonth:Date, secondMonth:Date):number{

    const diffTime = secondMonth.getTime() - oneMonth.getTime()
    const diffDays =  diffTime / (1000 * 3600 * 24)
    return diffDays
}

console.log(diffDays(oneMonth,secondMonth))