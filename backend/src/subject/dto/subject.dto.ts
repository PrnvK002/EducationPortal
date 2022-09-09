import { IsString } from 'class-validator';

export class CreateSubject {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
