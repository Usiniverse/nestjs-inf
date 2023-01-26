import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
    private boards: Board[] = []; // 게시판 정보

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(title: string, descrpition: string) {
        const board: Board = {
            id: uuid(),
            title,
            descrpition,
            status: BoardStatus.PUBLIC
        }   

        this.boards.push(board)
        return board;
    }
}
