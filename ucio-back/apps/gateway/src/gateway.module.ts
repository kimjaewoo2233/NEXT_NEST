import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HOST, MEMBER_PORT, MEMBER_SERVICE } from 'libs/common/service-name';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MEMBER_SERVICE,
        transport: Transport.TCP,
        options: {
          host: HOST,
          port: MEMBER_PORT,
        },
      },
    ]),
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
