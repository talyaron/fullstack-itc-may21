export{};

import { classA } from "../model/students";


export function allStudentsA (req, res) {
    res.send(classA);
}  