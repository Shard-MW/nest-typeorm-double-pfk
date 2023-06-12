import { DataSource, Repository } from 'typeorm';
import { Organization } from '../entities/organization.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrganizationRepository extends Repository<Organization> {
  constructor(private dataSource: DataSource) {
    super(Organization, dataSource.createEntityManager());
  }
}
