import { IsString, IsNotEmpty } from 'class-validator';

export class CreateOffreDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  location: string;
}
