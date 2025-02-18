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
exports.PropertyController = void 0;
const common_1 = require("@nestjs/common");
const property_service_1 = require("./property.service");
const create_property_dto_1 = require("./dto/create-property.dto");
const update_property_dto_1 = require("./dto/update-property.dto");
const swagger_1 = require("@nestjs/swagger");
let PropertyController = class PropertyController {
    constructor(propertyService) {
        this.propertyService = propertyService;
    }
    create(user_id, address_id, createPropertyDto) {
        return this.propertyService.create(user_id, address_id, createPropertyDto);
    }
    findAll(user_id) {
        return this.propertyService.findAll(user_id);
    }
    findOne(user_id, property_id) {
        return this.propertyService.findOne(user_id, property_id);
    }
    update(property_id, updatePropertyDto) {
        return this.propertyService.update(property_id, updatePropertyDto);
    }
    remove(user_id, property_id) {
        return this.propertyService.remove(user_id, property_id);
    }
};
exports.PropertyController = PropertyController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a property for a user' }),
    (0, swagger_1.ApiParam)({ name: 'user_id', type: Number, description: 'User ID' }),
    (0, swagger_1.ApiParam)({ name: 'address_id', type: Number, description: 'Address ID' }),
    (0, swagger_1.ApiBody)({ type: create_property_dto_1.CreatePropertyDto }),
    (0, common_1.Post)(':user_id/properties/:address_id'),
    __param(0, (0, common_1.Param)('user_id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('address_id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, create_property_dto_1.CreatePropertyDto]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all properties for a specific user' }),
    (0, swagger_1.ApiParam)({ name: 'user_id', type: Number, description: 'User ID' }),
    (0, common_1.Get)(':user_id/properties'),
    __param(0, (0, common_1.Param)('user_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific property for a user' }),
    (0, swagger_1.ApiParam)({ name: 'user_id', type: Number, description: 'User ID' }),
    (0, swagger_1.ApiParam)({ name: 'property_id', type: Number, description: 'Property ID' }),
    (0, common_1.Get)(':user_id/properties/:property_id'),
    __param(0, (0, common_1.Param)('user_id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('property_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a specific property for a user' }),
    (0, swagger_1.ApiParam)({ name: 'property_id', type: Number, description: 'Property ID' }),
    (0, swagger_1.ApiBody)({ type: update_property_dto_1.UpdatePropertyDto }),
    (0, common_1.Patch)(':user_id/properties/:property_id'),
    __param(0, (0, common_1.Param)('property_id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_property_dto_1.UpdatePropertyDto]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a specific property for a user' }),
    (0, swagger_1.ApiParam)({ name: 'user_id', type: Number, description: 'User ID' }),
    (0, swagger_1.ApiParam)({ name: 'property_id', type: Number, description: 'Property ID' }),
    (0, common_1.Delete)(':user_id/properties/:property_id'),
    __param(0, (0, common_1.Param)('user_id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('property_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], PropertyController.prototype, "remove", null);
exports.PropertyController = PropertyController = __decorate([
    (0, swagger_1.ApiTags)('Properties'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [property_service_1.PropertyService])
], PropertyController);
//# sourceMappingURL=property.controller.js.map