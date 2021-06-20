/*let x: Array<string> = ['Sunday','Monday','Tuesday','Wednesday','Thuersday','Friday','Saturday'];


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

//filter and sort
console.log(fruitcity.sort((a, b) => b.NumberOffruits - a.NumberOffruits))
console.log(fruitcity.filter(fruitcity => fruitcity.city >= 'H'));

*/

//find

interface Employee {
    id:number;
    name:string;
};

let p:Array<Employee> = [{id:1234, name:'Eric'}, {id:24323, name:'Tomas'}]
console.log(p)
console.log(p.find(employee=>employee.id === 1234));

let employeeIndex:number = p.findIndex(employee=>employee.id === 1234);

 p[employeeIndex].name = 'Eric AAA';

//map

interface Book {
    author: string|number;
    yearOfPublication: number;
    bookName: string
}

let books: Array<Book> = [
    {
        author: 'daglas Adams',
        bookName: 'aaaa',
        yearOfPublication: 1980
    },
    {
        author: 'Hobbes',
        bookName: 'bbbb',
        yearOfPublication: 1620
    },
    {
        author: "artreaa",
        bookName: 'eeee',
        yearOfPublication: 50
    },
    {
        author: "gghf",
        bookName: 'gg',
        yearOfPublication: 2001
    },
    {
        author: "ertert",
        bookName: 'hh',
        yearOfPublication: 2021
    }
]

books.forEach(book=>{
    console.log(book.author)
})

const booksForDOM = books.map((book, index)=> `<p id=${index}>${book.bookName} Author is ${book.author}</p>`).join(' ')
console.log(booksForDOM);

// localStorage.setItem('books',JSON.stringify(books));

// let newBooks = JSON.parse(localStorage.getItem('books'));
// console.log('newBooks', newBooks)


const root = document.querySelector('#root');
root.innerHTML = booksForDOM
