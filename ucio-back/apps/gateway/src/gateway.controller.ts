import { Controller, Get, Inject } from '@nestjs/common';
import { MEMBER_SERVICE } from 'libs/common/service-name';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class GatewayController {
  constructor(@Inject(MEMBER_SERVICE) private readonly client: ClientProxy) {}
  // @Inject 키 값은 GateWayModule provider에 등록된 provide 값 넣으면됨
  @Get()
  async getHello() {
    const response = await firstValueFrom(
      this.client.send({ cmd: 'getOrg' }, []),
    );
    return response;
  }
}
