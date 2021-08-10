
const path = require('path')
const filePath = path.resolve(__dirname, 'survey.json')
const fs = require('fs');
const {
    v4: uuidv4
} = require('uuid');



//splice routes and models for each .json (one for surveys and other for questions)




function getAllSurveys() { 
    const allTasks = fs.readFileSync(filePath);
    console.log(allTasks);
    const parsed = JSON.parse(allTasks)
    return parsed
}


function addSurvey(title) { 

    const allTasks = getAllTasks();
    const task = {
        title,
        id: uuidv4()
    }

    allTasks.push(task);

    fs.writeFileSync(filePath, JSON.stringify(allTasks));
    return allTasks
}


function addQuestion(title) { 

    const allTasks = getAllTasks();
    const task = {
        title,
        id: uuidv4()
    }

    allTasks.push(task);

    fs.writeFileSync(filePath, JSON.stringify(allTasks));
    return allTasks
}


function deleteSurvey(id) { 

    const allTasks = getAllTasks();

    const filteredTasks = allTasks.filter(task => task.id !== id)

    fs.writeFileSync(filePath, JSON.stringify(filteredTasks));
    return filteredTasks
}



function deleteQuestion(id) { 

    const allTasks = getAllTasks();

    const filteredTasks = allTasks.filter(task => task.id !== id)

    fs.writeFileSync(filePath, JSON.stringify(filteredTasks));
    return filteredTasks
}



function editQuestion(id, newTitle) { 
    console.log("inside model");
    const allTasks = getAllTasks();
    const taskToEdit = allTasks.filter(task => task.id === id); 
    taskToEdit[0].title = newTitle;
    console.log(taskToEdit)
    fs.writeFileSync(filePath, JSON.stringify(allTasks));
    return allTasks
}


function editSurvey(id, newTitle) { 
    console.log("inside model");
    const allTasks = getAllTasks();
    const taskToEdit = allTasks.filter(task => task.id === id); 
    taskToEdit[0].title = newTitle;
    console.log(taskToEdit)
    fs.writeFileSync(filePath, JSON.stringify(allTasks));
    return allTasks
}




exports.getAllSurveys = getAllSurveys
exports.addSurvey = addSurvey
exports.deleteSurvey = deleteSurvey
exports.editSurvey = editSurvey 
exports.addQuestion = addQuestion
exports.editQuestion = editQuestion
exports.deleteQuestion = deleteQuestion


