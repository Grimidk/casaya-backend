import { User } from "src/user/entities/user.entity";
export declare class Property {
    property_id: number;
    bathrooms: number;
    bedrooms: number;
    parkingSpots: number;
    name: string;
    floors: number;
    user: User;
}
