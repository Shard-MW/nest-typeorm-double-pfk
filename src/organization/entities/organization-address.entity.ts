import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Organization } from './organization.entity';
import { Address } from 'src/address/entities/address.entity';
import { OrganizationAddressTypeEnum } from '../enums/organization-address-type.enum';

@Entity({ name: 'organization_address' })
export class OrganizationAddress {
  @PrimaryColumn({ name: 'organization_id' })
  organizationId: typeof Organization.prototype.id;

  @PrimaryColumn({ name: 'address_id' })
  addressId: typeof Address.prototype.id;

  @ManyToOne(() => Organization, (organization) => organization.addresses)
  @JoinColumn({ name: 'organization_id' })
  organization: Organization;

  @ManyToOne(() => Address, { cascade: true })
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @Column({ name: 'address_type', nullable: false })
  type: OrganizationAddressTypeEnum;
}
