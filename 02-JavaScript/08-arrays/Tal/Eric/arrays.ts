let x: Array<string> = ['Sunday','Monday','Tuesday','Wednesday','Thuersday','Friday','Saturday'];


let b: Array<string> = x.sort();
console.log(b)

let c: Array<any> = x.sort((a, b) => a - b);

console.log(c)

interface fruitsCity {
    city: string;
    NumberOffruits: number;
}

let fruitcity: Array<fruitsCity> = [
    {
        city: 'Haifa',
        NumberOffruits: 5
    },
    {
        city: 'Beer Sheva',
        NumberOffruits: 3
    },
    {
        city: 'Afula',
        NumberOffruits: 1
    }
]

console.log(fruitcity.sort((a, b) => b.NumberOffruits - a.NumberOffruits))
console.log(fruitcity.filter(fruitcity => fruitcity.city >= 'H  '));
