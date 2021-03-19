
export class MessageModel {
    constructor(
        public roomId?: string,
        public text?: string,
        public userName?: string,
        public userId?: string,
        public id?: string
    ) { }
}