import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignInUserDto } from './dto/sign-in-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  signUp(createUserDto: CreateUserDto) {
    return this.prisma.users.create({ data: createUserDto });
  }

  async signIn(signInUserDto: SignInUserDto) {
    const user = await this.prisma.users.findFirst({
      where: {
        AND: [
          {
            email: signInUserDto.email,
          },
          {
            password: signInUserDto.password,
          },
        ],
      },
    });

    if(user){
      return user
    }else{
      return "User Not Found"
    }
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({ where: { id } });
  }
}
