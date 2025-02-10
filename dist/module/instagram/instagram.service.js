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
const instagram_model_1 = __importDefault(require("./instagram.model"));
const createInstagram = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield instagram_model_1.default.create(payload);
    return result;
});
const getAllInstagrams = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield instagram_model_1.default.find();
    return result;
});
const getSingleInstagram = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield instagram_model_1.default.findById(id);
    return result;
});
const updateInstagram = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield instagram_model_1.default.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
});
const deleteInstagram = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield instagram_model_1.default.findByIdAndDelete(id);
    if (!result) {
        throw new Error("Instagram entry could not be deleted");
    }
    return result;
});
exports.instagramService = {
    createInstagram,
    getAllInstagrams,
    getSingleInstagram,
    updateInstagram,
    deleteInstagram,
};
