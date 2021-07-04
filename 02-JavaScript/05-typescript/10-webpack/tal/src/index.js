import _ from 'lodash';

function addElement(elm){
   
    elm.innerHTML += _.join(['Hello', 'webpack!!!!', '334345:-)'], ' ');''
}
const root = document.querySelector("#root");
addElement(root)