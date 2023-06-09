import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { OrganizationAddressTypeEnum } from '../enums/organization-address-type.enum';

class AddressDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  street: string;
}

class OrganizationAddressDto {
  @ValidateNested()
  @Type(() => AddressDto)
  @IsOptional()
  address: AddressDto;

  @IsEnum(OrganizationAddressTypeEnum)
  @IsOptional()
  type: OrganizationAddressTypeEnum;
}

export class UpdateOrganizationDto {
  @IsOptional()
  @IsString()
  companyName: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrganizationAddressDto)
  addresses: OrganizationAddressDto[];
}
