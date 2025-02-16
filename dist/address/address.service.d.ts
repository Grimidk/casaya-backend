import { CreateAddressDto } from './dto/create-address.dto';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';
import { updateAddressParam } from './utils/types';
export declare class AddressService {
    private readonly addressRepository;
    constructor(addressRepository: Repository<Address>);
    create(createAddressDto: CreateAddressDto): Promise<Address>;
    findAll(): Promise<Address[]>;
    findOne(address_id: number): Promise<Address>;
    update(address_id: number, updateAddressDetails: updateAddressParam): Promise<import("typeorm").UpdateResult>;
    remove(address_id: number): Promise<void>;
}
