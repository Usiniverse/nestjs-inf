import { Body, Controller, Get, Post, Param, UsePipes, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { title } from 'process';
import { Board } from './board.entity'
import { CreateBoardDto } from 'src/dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { BoardStatusValidationPipe } from 'src/pipes/board-status-valideation.pipe';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Get()
    getAllBoard():Promise<Board[]> {
        return this.boardsService.getAllBoards()
    }

    @Post()
    @UsePipes()
    createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<Board> {
        return this.boardsService.createBoard(CreateBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id:number): Promise<Board> {
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id', ParseIntPipe) id:number): Promise<void> { // ParseIntPipe : 숫자로 오는지 확인
        return this.boardsService.deleteBoard(id)
    }

    @Patch('/:id')
    updateBoardStatus(
        @Param('id', ParseIntPipe) id: number, 
        @Body('status', BoardStatusValidationPipe) status:BoardStatus
    ): Promise<Board> {
        return this.boardsService.updateBoardStatus(id, status);
    }
}
