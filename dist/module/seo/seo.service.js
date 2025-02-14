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
exports.seoService = void 0;
const querybuilder_1 = __importDefault(require("../../builder/querybuilder"));
const seo_model_1 = __importDefault(require("./seo.model"));
const createSEO = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield seo_model_1.default.create(payload);
    return result;
});
const getAllSEOs = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const searchableFields = ["canonicalUrl", "title", "description", "pageSlug"];
    const seos = new querybuilder_1.default(seo_model_1.default.find(), query)
        .search(searchableFields)
        .filter()
        .sort()
        .select();
    const result = yield seos.modelQuery;
    return result;
});
const getSingleSEO = (pageSlug) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield seo_model_1.default.findOne({ pageSlug });
    return result;
});
const updateSEO = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield seo_model_1.default.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
});
const deleteSEO = (seoId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield seo_model_1.default.findByIdAndDelete(seoId);
    if (!result) {
        throw new Error("SEO entry could not be deleted");
    }
    return result;
});
exports.seoService = {
    createSEO,
    getAllSEOs,
    getSingleSEO,
    updateSEO,
    deleteSEO,
};
