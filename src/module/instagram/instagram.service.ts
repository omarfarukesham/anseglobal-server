import { Instagram } from './instagram.model';

const instagramDatabase: Instagram[] = [];

export const instagramService = {
  create(accessToken: string): Instagram {
    const newRecord: Instagram = {
      id: (instagramDatabase.length + 1).toString(),
      accessToken,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    instagramDatabase.push(newRecord);
    return newRecord;
  },

  getAll(): Instagram[] {
    return instagramDatabase;
  },

  getById(id: string): Instagram | undefined {
    return instagramDatabase.find((record) => record.id === id);
  },


  delete(id: string): boolean {
    const index = instagramDatabase.findIndex((record) => record.id === id);
    if (index !== -1) {
      instagramDatabase.splice(index, 1);
      return true;
    }
    return false;
  },
};
