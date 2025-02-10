"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instagramController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const instagram_service_1 = require("./instagram.service");
const createInstagram = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newInstagram = yield instagram_service_1.instagramService.createInstagram(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: "Instagram record created successfully",
        data: newInstagram,
    });
}));
const getAllInstagrams = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const instagrams = yield instagram_service_1.instagramService.getAllInstagrams();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Instagram records fetched successfully",
        data: instagrams,
    });
}));
const getInstagramById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const instagram = yield instagram_service_1.instagramService.getSingleInstagram(id);
    if (!instagram) {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: "Instagram record not found" });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Instagram record fetched successfully",
        data: instagram,
    });
}));
const deleteInstagram = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const instagram = yield instagram_service_1.instagramService.deleteInstagram(id);
    if (!instagram) {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: "Instagram record not found" });
        return;
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Instagram record deleted successfully",
        data: {},
    });
}));
exports.instagramController = {
    createInstagram,
    getAllInstagrams,
    getInstagramById,
    deleteInstagram,
};
