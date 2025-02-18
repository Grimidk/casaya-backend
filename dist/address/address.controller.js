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
exports.AddressController = void 0;
const common_1 = require("@nestjs/common");
const address_service_1 = require("./address.service");
const create_address_dto_1 = require("./dto/create-address.dto");
const update_address_dto_1 = require("./dto/update-address.dto");
const swagger_1 = require("@nestjs/swagger");
let AddressController = class AddressController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    create(createAddressDto) {
        return this.addressService.create(createAddressDto);
    }
    findAll() {
        return this.addressService.findAll();
    }
    findOne(address_id) {
        return this.addressService.findOne(address_id);
    }
    async update(address_id, updateAddressDto) {
        await this.addressService.update(address_id, updateAddressDto);
    }
    remove(address_id) {
        return this.addressService.remove(address_id);
    }
};
exports.AddressController = AddressController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new address' }),
    (0, swagger_1.ApiBody)({ type: create_address_dto_1.CreateAddressDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Address successfully created.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_address_dto_1.CreateAddressDto]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all addresses' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all addresses.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':address_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a specific address by ID' }),
    (0, swagger_1.ApiParam)({ name: 'address_id', required: true, description: 'ID of the address' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Address found.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Address not found.' }),
    __param(0, (0, common_1.Param)('address_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':address_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing address' }),
    (0, swagger_1.ApiParam)({ name: 'address_id', required: true, description: 'ID of the address to update' }),
    (0, swagger_1.ApiBody)({ type: update_address_dto_1.UpdateAddressDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Address successfully updated.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Address not found.' }),
    __param(0, (0, common_1.Param)('address_id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_address_dto_1.UpdateAddressDto]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':address_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an address by ID' }),
    (0, swagger_1.ApiParam)({ name: 'address_id', required: true, description: 'ID of the address to delete' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Address successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Address not found.' }),
    __param(0, (0, common_1.Param)('address_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "remove", null);
exports.AddressController = AddressController = __decorate([
    (0, swagger_1.ApiTags)('Address'),
    (0, common_1.Controller)('address'),
    __metadata("design:paramtypes", [address_service_1.AddressService])
], AddressController);
//# sourceMappingURL=address.controller.js.map