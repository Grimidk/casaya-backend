import { CreatePropertyDto } from './dto/create-property.dto';
import { Property } from './entities/property.entity';
import { updatePropertyParam } from './utils/types';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
export declare class PropertyService {
    private readonly propertyRepository;
    private readonly userRepository;
    constructor(propertyRepository: Repository<Property>, userRepository: Repository<User>);
    create(user_id: number, createPropertyDto: CreatePropertyDto): Promise<Property>;
    findAll(user_id: number): Promise<Property[]>;
    findOne(user_id: number, property_id: number): Promise<Property>;
    update(property_id: number, updatePropertyDetails: updatePropertyParam): Promise<import("typeorm").UpdateResult>;
    remove(user_id: number, property_id: number): Promise<void>;
}
