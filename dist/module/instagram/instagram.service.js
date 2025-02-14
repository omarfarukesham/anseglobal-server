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
exports.instagramService = void 0;
const axios_1 = __importDefault(require("axios"));
const instagram_model_1 = __importDefault(require("./instagram.model"));
const createInstagramToken = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existingInstagram = yield instagram_model_1.default.findOne(); // Check if a token already exists
    if (existingInstagram) {
        throw new Error("Instagram API token already exist.");
    }
    const result = yield instagram_model_1.default.create(payload);
    return result;
});
const getInstagramToken = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield instagram_model_1.default.findOne();
    return result;
});
const getInstagramData = () => __awaiter(void 0, void 0, void 0, function* () {
    const instagramRecord = yield instagram_model_1.default.findOne(); // Get the existing Instagram record
    if (!instagramRecord) {
        throw new Error("No Instagram token found.");
    }
    const token = instagramRecord.token;
    const response = yield axios_1.default.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}`);
    return response.data;
});
const getSingleInstagram = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield instagram_model_1.default.findById(id);
    return result;
});
const updateInstagramToken = (token, newToken) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("🚀 ~ newToken:", newToken);
    const result = yield instagram_model_1.default.findOneAndUpdate({ token: token }, { token: newToken }, // Update the token with the same value
    {
        new: true,
    });
    console.log("🚀 ~ result:", result);
    return result;
});
const deleteInstagramToken = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield instagram_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new Error("Instagram entry could not be deleted");
    }
    return result;
});
exports.instagramService = {
    createInstagramToken,
    getInstagramToken,
    getInstagramData,
    getSingleInstagram,
    updateInstagramToken,
    deleteInstagramToken,
};
