import { Injectable, NotFoundException } from '@nestjs/common';
import { OrganizationRepository } from '../repositories/organization.repository';
import { Organization } from '../entities/organization.entity';

@Injectable()
export class OrganizationService {
  constructor(private organizationRepository: OrganizationRepository) {}

  async getOrganizationById(
    organizationId: typeof Organization.prototype.id,
  ): Promise<Organization> {
    const organization = await this.organizationRepository.findOne({
      where: { id: organizationId },
    });

    if (!organization) {
      throw new NotFoundException(
        `Cannot find organization with id ${organizationId}`,
      );
    }

    return organization;
  }

  async getOrganizations(): Promise<Organization[]> {
    return await this.organizationRepository.find({
      relations: {
        addresses: {
          address: true,
        },
      },
    });
  }

  async updateOrganization(organization: Organization): Promise<Organization> {
    return await this.organizationRepository.save(organization);
  }
}
