import { ConflictException, InternalServerErrorException, Logger } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { User } from "./user.entity";
import * as bcrypt from "bcryptjs"

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
        const { username, password } = authCredentialDto;
        
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt); // 패스워드와 솔트 해시값이 더해짐
        
        const user = this.create({ username, password: hashedPassword })
        
        try {
            await this.save(user);
        } catch(error) {
            if (error.code === '23505') {
                console.log('Error Message: ', error.detail);
                throw new ConflictException('Existing username')
            } else {
                throw new InternalServerErrorException();
            }            
        }
    }
}