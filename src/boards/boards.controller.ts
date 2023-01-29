import { Body, Controller, Get, Post, Param, UsePipes } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { title } from 'process';
import { Board } from './board.entity'
import { CreateBoardDto } from 'src/dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Post()
    @UsePipes()
    createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<Board> {
        return this.boardsService.createBoard(CreateBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id:number): Promise<Board> {
        return this.boardsService.getBoardById(id);
    }


    // @Get()
    // getAllBoard(): Board[] {
    //     return this.boardsService.getAllBoards();
    // }

    // @Post()
    // createBoard(@Body('title') title: string, @Body('description') description: string): Board {
    //     return this.boardsService.createBoard(title, description);
    // }
}
