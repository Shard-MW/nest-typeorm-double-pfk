import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationModule } from './organization/organization.module';
import { AddressModule } from './address/address.module';
import { Organization } from './organization/entities/organization.entity';
import { OrganizationAddress } from './organization/entities/organization-address.entity';
import { Address } from './address/entities/address.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 4306,
      username: 'root',
      password: '123',
      database: 'poc-nest-typeorm-double-pfk',
      entities: [Organization, OrganizationAddress, Address],
      synchronize: true,
      logging: true,
    }),
    OrganizationModule,
    AddressModule,
  ],
})
export class AppModule {}
