import { IInstagram } from "./instagram.interface";
import Instagram from "./instagram.model";

const createInstagram = async (payload: IInstagram): Promise<IInstagram> => {
  const result = await Instagram.create(payload);
  return result;
};

const getAllInstagrams = async (): Promise<IInstagram[]> => {
  const result = await Instagram.find();
  return result;
};

const getSingleInstagram = async (id: string): Promise<IInstagram | null> => {
  const result = await Instagram.findById(id);
  return result;
};

const updateInstagram = async (
  id: string,
  data: Partial<IInstagram>
): Promise<IInstagram | null> => {
  const result = await Instagram.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

const deleteInstagram = async (id: string): Promise<IInstagram | null> => {
  const result = await Instagram.findByIdAndDelete(id);
  if (!result) {
    throw new Error("Instagram entry could not be deleted");
  }
  return result;
};

export const instagramService = {
  createInstagram,
  getAllInstagrams,
  getSingleInstagram,
  updateInstagram,
  deleteInstagram,
};
