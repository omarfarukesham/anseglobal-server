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
const createInstagramToken = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newInstagram = yield instagram_service_1.instagramService.createInstagramToken(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: "Token added successfully",
        data: newInstagram,
    });
}));
const getInstagramToken = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const instagramToken = yield instagram_service_1.instagramService.getInstagramToken();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Instagram records fetched successfully",
        data: instagramToken,
    });
}));
const getInstagramData = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const instagramData = yield instagram_service_1.instagramService.getInstagramData();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Instagram data fetched successfully",
        data: instagramData,
    });
}));
const updateInstagramToken = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.params;
    const { newToken } = req.body;
    console.log(req.body);
    const updatedInstagram = yield instagram_service_1.instagramService.updateInstagramToken(token, newToken);
    if (!updatedInstagram) {
        res
            .status(http_status_codes_1.StatusCodes.NOT_FOUND)
            .json({ message: "Instagram record not found" });
        return;
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Instagram Token Updated successfully",
        data: {},
    });
}));
const getInstagramById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const instagram = yield instagram_service_1.instagramService.getSingleInstagram(id);
    if (!instagram) {
        res
            .status(http_status_codes_1.StatusCodes.NOT_FOUND)
            .json({ message: "Instagram record not found" });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Instagram record fetched successfully",
        data: instagram,
    });
}));
const deleteInstagramToken = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const instagram = yield instagram_service_1.instagramService.deleteInstagramToken(id);
    if (!instagram) {
        res
            .status(http_status_codes_1.StatusCodes.NOT_FOUND)
            .json({ message: "Instagram record not found" });
        return;
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Instagram record deleted successfully",
        data: {},
    });
}));
exports.instagramController = {
    createInstagramToken,
    getInstagramToken,
    getInstagramData,
    getInstagramById,
    updateInstagramToken,
    deleteInstagramToken,
};
