import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrganizationAddress } from './organization-address.entity';

@Entity({ name: 'organization' })
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'company_name' })
  companyName: string;

  @OneToMany(
    () => OrganizationAddress,
    (orgAddress) => orgAddress.organization,
    { cascade: true },
  )
  addresses: OrganizationAddress[];
}
