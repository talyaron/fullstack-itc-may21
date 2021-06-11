function getSallery(sallery:number):string{
    var monthly = sallery / 12;
    return `your avarage monthly sallery is: ${monthly}`
}

console.log(getSallery(1200));