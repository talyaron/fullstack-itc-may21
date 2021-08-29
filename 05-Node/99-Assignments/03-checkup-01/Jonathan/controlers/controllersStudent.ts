export { };

import {Student, Students} from '../model/student';

export function getStudents (req, res) {
    res.send({getStudents:true});
}
