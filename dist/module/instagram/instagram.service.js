"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instagramService = void 0;
const instagramDatabase = [];
exports.instagramService = {
    create(accessToken) {
        const newRecord = {
            id: (instagramDatabase.length + 1).toString(),
            accessToken,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        instagramDatabase.push(newRecord);
        return newRecord;
    },
    getAll() {
        return instagramDatabase;
    },
    getById(id) {
        return instagramDatabase.find((record) => record.id === id);
    },
    delete(id) {
        const index = instagramDatabase.findIndex((record) => record.id === id);
        if (index !== -1) {
            instagramDatabase.splice(index, 1);
            return true;
        }
        return false;
    },
};
