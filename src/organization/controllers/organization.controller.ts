import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { Organization } from '../entities/organization.entity';
import { OrganizationService } from '../services/organization.service';
import { UpdateOrganizationDto } from '../dtos/update-organization.dto';

@Controller('organizations')
export class OrganizationController {
  constructor(private organizationService: OrganizationService) {}

  @Get()
  async getOrganizations(): Promise<Organization[]> {
    return await this.organizationService.getOrganizations();
  }

  @Patch(':organizationId')
  async updateOrganization(
    @Param('organizationId') organizationId: number,
    @Body() { companyName, addresses }: UpdateOrganizationDto,
  ): Promise<Organization> {
    const newOrganization = {
      id: Number(organizationId),
      companyName,
      addresses,
    } as Organization;

    console.dir(newOrganization, { depth: null });

    return await this.organizationService.updateOrganization(newOrganization);
  }
}
