import { IsNotEmpty, MinLength, MaxLength, IsEmail, IsString, IsArray, IsMongoId } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty({
    example: 'cat',
    description: 'title of the Cat',
    format: 'string',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  // Email
  @ApiProperty({
    example: 'cat',
    description: 'avata of the Cat',
    format: 'string',
  })
  @IsNotEmpty()
  @IsString()
  readonly avatar: string;

  // Password
  @ApiProperty({
    example: ['sounds'],
    description: 'The sounds of the Cat',
    format: '[string]',
  })
  @ApiProperty()
  @IsArray()
  readonly sounds: [string];
}
export class ParamId {
  @ApiProperty({
    example: '123456789',
    description: 'title of the Cat',
    format: 'string',
  })
  @IsNotEmpty()
  @IsMongoId()
  readonly id: string;

}