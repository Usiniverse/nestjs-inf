export interface Board {
    id: string;
    title: string;
    descrpition: string;
    status: BoardStatus
}

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}