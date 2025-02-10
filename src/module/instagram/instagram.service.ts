import { IInstagram } from "./instagram.interface";
import Instagram from "./instagram.model";

const createInstagramToken = async (
  payload: IInstagram
): Promise<IInstagram> => {
  const existingInstagram = await Instagram.findOne(); // Check if a token already exists
  if (existingInstagram) {
    throw new Error("Only a single Instagram API token can be stored.");
  }
  const result = await Instagram.create(payload);
  return result;
};

const getInstagramToken = async (): Promise<IInstagram[]> => {
  const result = await Instagram.find();
  return result;
};

const getInstagramData = () => {};

const getSingleInstagram = async (id: string): Promise<IInstagram | null> => {
  const result = await Instagram.findById(id);
  return result;
};

const updateInstagramToken = async (
  id: string,
  data: Partial<IInstagram>
): Promise<IInstagram | null> => {
  const result = await Instagram.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

const deleteInstagramToken = async (id: string): Promise<IInstagram | null> => {
  const result = await Instagram.findByIdAndDelete(id);
  if (!result) {
    throw new Error("Instagram entry could not be deleted");
  }
  return result;
};

export const instagramService = {
  createInstagramToken,
  getInstagramToken,
  getSingleInstagram,
  updateInstagramToken,
  deleteInstagramToken,
};
