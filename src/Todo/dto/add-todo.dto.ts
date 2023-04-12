import { ApiProperty } from '@nestjs/swagger';

export class AddTodoDto {
  @ApiProperty()
  public readonly title: string;

  @ApiProperty()
  public readonly text: string;

  public constructor(opts?: Partial<AddTodoDto>) {
    Object.assign(this, opts);
  }
}
