import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(createAddressDto: CreateAddressDto): Promise<import("./entities/address.entity").Address>;
    findAll(): Promise<import("./entities/address.entity").Address[]>;
    findOne(address_id: number): Promise<import("./entities/address.entity").Address>;
    update(address_id: number, updateAddressDto: UpdateAddressDto): Promise<void>;
    remove(address_id: number): Promise<void>;
}
