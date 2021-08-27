const suvery = [];

function handleSuvName(e){
    e.preventDefault();
    const title = e.target.elements.suvName.value;
    suvery.push(title);  
}

function handleAnswers(e){
    e.preventDefault();
    const question = e.target.elements.question.value;   
    const firstAns = e.target.elements.first_ans.value;   
    const secondAns = e.target.elements.second_ans.value;   
    const thirdAns = e.target.elements.third_ans.value;
    suvery.push
}