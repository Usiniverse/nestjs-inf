import { Get, Injectable, NotFoundException, Param } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { CreateBoardDto } from '../dto/create-board.dto'

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository
    ) {}
    
    async createBoard(createBoardDto: CreateBoardDto):Promise<Board> {
        return this.boardRepository.createBoard(createBoardDto);
    }

    async getBoardById(id: number): Promise<Board> {
        const found = await this.boardRepository.findOne(id)

        if (!found) {
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }

        return found
    }


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
