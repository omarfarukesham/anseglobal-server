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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instagramController = void 0;
const instagram_service_1 = require("./instagram.service");
exports.instagramController = {
    createInstagram(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { accessToken } = req.body;
                const newInstagram = yield instagram_service_1.instagramService.create(accessToken);
                res.status(201).json(newInstagram);
            }
            catch (error) {
                res.status(500).json({ message: 'Error creating Instagram record', error });
            }
        });
    },
    getAllInstagrams(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const instagrams = yield instagram_service_1.instagramService.getAll();
                res.status(200).json(instagrams);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching Instagram records', error });
            }
        });
    },
    getInstagramById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const instagram = yield instagram_service_1.instagramService.getById(id);
                if (!instagram) {
                    res.status(404).json({ message: 'Instagram record not found' });
                }
                res.status(200).json(instagram);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching Instagram record', error });
            }
        });
    },
    deleteInstagram(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const success = yield instagram_service_1.instagramService.delete(id);
                if (!success) {
                    res.status(404).json({ message: 'Instagram record not found' });
                }
                res.status(200).json({ message: 'Instagram record deleted successfully' });
            }
            catch (error) {
                res.status(500).json({ message: 'Error deleting Instagram record', error });
            }
        });
    },
};
