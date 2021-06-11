function getsallery(sallery:number):string {
    let monthly:number = sallery / 12;
    return `your avarage monthly sallery is: ${monthly}`;
}

console.log(getsallery(12000));