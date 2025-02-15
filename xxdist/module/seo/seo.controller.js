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
exports.seoController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const seo_service_1 = require("./seo.service");
const createSEO = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = Object.assign({}, req.body);
    console.log(req.body);
    const result = yield seo_service_1.seoService.createSEO(payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: "SEO entry created successfully",
        data: result,
    });
}));
const getAllSEOs = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield seo_service_1.seoService.getAllSEOs(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "All SEO entries retrieved successfully",
        data: result,
    });
}));
const getSingleSEO = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const seoId = req.params.id;
    const pageSlug = req.params.slug;
    const result = yield seo_service_1.seoService.getSingleSEO(pageSlug);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "SEO entry retrieved successfully",
        data: result,
    });
}));
const updateSEO = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const seoId = req.params.id;
    const body = req.body;
    const result = yield seo_service_1.seoService.updateSEO(seoId, body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "SEO entry updated successfully",
        data: result,
    });
}));
const deleteSEO = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const seoId = req.params.id;
    yield seo_service_1.seoService.deleteSEO(seoId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "SEO entry deleted successfully",
        data: {},
    });
}));
exports.seoController = {
    createSEO,
    getAllSEOs,
    getSingleSEO,
    updateSEO,
    deleteSEO,
};
