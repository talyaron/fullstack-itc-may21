class Student {
    constructor(name){
        this.id = Math.random().toString(16)
        this.name = name
    }
}

class Students{
    students = [Student]

    addStudent(student){
        this.students.push(student)
    }
    
}

exports.drinks = [
    { name: "Kola", src: 'https://cdn-img.globalrustrade.com/i/k/kekCBeVWG2/2420.jpg' },
    { name: "Mate", src: 'https://post.healthline.com/wp-content/uploads/2019/09/Yerba_Mate_732x549-thumbnail.jpg' },
];
