"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const property_entity_1 = require("./entities/property.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const address_entity_1 = require("../address/entities/address.entity");
let PropertyService = class PropertyService {
    constructor(propertyRepository, userRepository, addressRepository) {
        this.propertyRepository = propertyRepository;
        this.userRepository = userRepository;
        this.addressRepository = addressRepository;
    }
    async create(user_id, address_id, createPropertyDto) {
        const user = await this.userRepository.findOne({ where: { user_id } });
        if (!user)
            throw new common_1.HttpException('User not found. Cannot create property!', common_1.HttpStatus.BAD_REQUEST);
        const address = await this.addressRepository.findOne({ where: { address_id } });
        if (!address)
            throw new common_1.NotFoundException('Address not found.');
        const newProperty = this.propertyRepository.create({
            ...createPropertyDto,
            user,
            address,
        });
        return await this.propertyRepository.save(newProperty);
    }
    async findAll(user_id) {
        const user = await this.userRepository.findOne({ where: { user_id: user_id } });
        if (!user)
            throw new common_1.HttpException('User not found. Cannot create property!', common_1.HttpStatus.BAD_REQUEST);
        return this.propertyRepository.find({ where: { user } });
    }
    async findOne(user_id, property_id) {
        const user = await this.userRepository.findOne({ where: { user_id: user_id } });
        if (!user)
            throw new common_1.HttpException('User not found. Cannot create property!', common_1.HttpStatus.BAD_REQUEST);
        const property = await this.propertyRepository.findOne({
            where: { property_id, user },
            relations: ['user'],
        });
        if (!property)
            throw new common_1.HttpException('Property not found.', common_1.HttpStatus.NOT_FOUND);
        return property;
    }
    update(property_id, updatePropertyDetails) {
        return this.propertyRepository.update({ property_id }, { ...updatePropertyDetails });
    }
    async remove(user_id, property_id) {
        const property = await this.findOne(user_id, property_id);
        await this.propertyRepository.remove(property);
    }
};
exports.PropertyService = PropertyService;
exports.PropertyService = PropertyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(property_entity_1.Property)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(address_entity_1.Address)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PropertyService);
//# sourceMappingURL=property.service.js.map