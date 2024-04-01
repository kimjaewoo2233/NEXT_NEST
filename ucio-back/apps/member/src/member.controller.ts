import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('member')
export class MemberController {
  @MessagePattern({ cmd: 'getOrg' })
  public get() {
    return [
      {
        id: 1,
        name: '멤버몬',
        department: '기술지원팀',
        group: '유씨악스',
      },
      {
        id: 2,
        name: '멤스몬',
        department: '기술지원팀',
        group: '유씨악스',
      },
      {
        id: 3,
        name: '멤무몬',
        department: '기술지원팀',
        group: '유씨악스',
      },
    ];
  }
}
