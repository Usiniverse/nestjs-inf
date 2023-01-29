import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {

    // getAllBoards(): Board[] {
    //     return this.boards;
    // }

    // createBoard(title: string, descrpition: string) {
    //     const board: Board = {
    //         id: uuid(),
    //         title,
    //         descrpition,
    //         status: BoardStatus.PUBLIC
    //     }   

    //     this.boards.push(board)
    //     return board;
    // }
}
