import { ApiProperty } from '@nestjs/swagger';

export class UserArticlesDto {
  @ApiProperty()
  userId: number;
}
