import { IsNotEmpty } from "class-validator";
import { BoardStatus } from "src/boards/board-status.enum";

export class CreateBoardDto {
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    description: string;
}