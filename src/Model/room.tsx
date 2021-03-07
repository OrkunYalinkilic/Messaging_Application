import firebase from 'firebase';

export class Room {
    constructor(
        public name?: string,
        public userName?: string,
        public userId?: string,
        public id?: string
    ) { }
}