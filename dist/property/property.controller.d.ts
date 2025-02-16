import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
export declare class PropertyController {
    private readonly propertyService;
    constructor(propertyService: PropertyService);
    create(user_id: number, createPropertyDto: CreatePropertyDto): Promise<import("./entities/property.entity").Property>;
    findAll(user_id: number): Promise<import("./entities/property.entity").Property[]>;
    findOne(user_id: number, property_id: number): Promise<import("./entities/property.entity").Property>;
    update(property_id: number, updatePropertyDto: UpdatePropertyDto): Promise<import("typeorm").UpdateResult>;
    remove(user_id: number, property_id: number): Promise<void>;
}
