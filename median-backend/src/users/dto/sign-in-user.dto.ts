import { ApiProperty } from '@nestjs/swagger';

export class SignInUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
