import { Request, Response } from 'express';
import { instagramService } from './instagram.service';

export const instagramController = {
  async createInstagram(req: Request, res: Response) {
    try {
      const { accessToken } = req.body;
      const newInstagram = await instagramService.create(accessToken);
      res.status(201).json(newInstagram);
    } catch (error) {
      res.status(500).json({ message: 'Error creating Instagram record', error });
    }
  },

  async getAllInstagrams(req: Request, res: Response) {
    try {
      const instagrams = await instagramService.getAll();
      res.status(200).json(instagrams);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching Instagram records', error });
    }
  },

  async getInstagramById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const instagram = await instagramService.getById(id);
      if (!instagram) {
       res.status(404).json({ message: 'Instagram record not found' });
      }
      res.status(200).json(instagram);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching Instagram record', error });
    }
  },

  async deleteInstagram(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const success = await instagramService.delete(id);
      if (!success) {
      res.status(404).json({ message: 'Instagram record not found' });
      }
      res.status(200).json({ message: 'Instagram record deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting Instagram record', error });
    }
  },
};
