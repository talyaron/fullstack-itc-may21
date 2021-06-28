var oneMonth = new Date('06/27/2020');
var secondMonth = new Date('06/27/2021');
function diffDays(oneMonth, secondMonth) {
    var diffTime = secondMonth.getTime() - oneMonth.getTime();
    var diffDays = diffTime / (1000 * 3600 * 24);
    return diffDays;
}
console.log(diffDays(oneMonth, secondMonth));
