export { };

import { beaches } from '../model/images';

export function allBeaches (req, res) {
    res.send(beaches);
};

export function firstBeach (req, res) {
    res.send(beaches[0]);
};