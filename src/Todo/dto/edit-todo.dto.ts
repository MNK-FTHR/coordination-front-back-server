import { ApiProperty } from '@nestjs/swagger';

export class EditTodoDto {
  @ApiProperty()
  @ApiProperty({ description: 'Nouveau champ de titre' })
  public readonly title: string;

  @ApiProperty()
  @ApiProperty({ description: 'Nouveau champ de description' })
  public readonly text: string;

  @ApiProperty()
  @ApiProperty({ description: 'Nouvel état' })
  public readonly completed: boolean;

  public constructor(opts?: Partial<EditTodoDto>) {
    Object.assign(this, opts);
  }
}
