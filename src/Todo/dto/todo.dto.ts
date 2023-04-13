import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @ApiProperty()
  @ApiProperty({ example: 1, description: 'ID Autogénéré' })
  public readonly id: number;

  @ApiProperty()
  @ApiProperty({ example: 'Respirer', description: 'Titre du todo' })
  public readonly title: string;

  @ApiProperty()
  @ApiProperty({
    example: 'Respirer normalement comme un humain',
    description: 'Description du todo',
  })
  public readonly text: string;

  @ApiProperty()
  @ApiProperty({
    description: 'Etat de complétion du todo',
  })
  public readonly completed: boolean;
}
