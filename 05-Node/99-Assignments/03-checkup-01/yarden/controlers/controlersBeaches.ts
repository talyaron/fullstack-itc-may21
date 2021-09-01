export { };

import { Student, Students } from '../model/students';

export function getStudents(req, res) {
    res.send({ getStudents: true })
}