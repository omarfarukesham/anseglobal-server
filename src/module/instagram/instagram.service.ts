import axios from "axios";
import { IInstagram } from "./instagram.interface";
import Instagram from "./instagram.model";

const createInstagramToken = async (
  payload: IInstagram
): Promise<IInstagram> => {
  const existingInstagram = await Instagram.findOne(); // Check if a token already exists
  if (existingInstagram) {
    throw new Error("Instagram API token already exist.");
  }
  const result = await Instagram.create(payload);
  return result;
};

const getInstagramToken = async (): Promise<IInstagram | null> => {
  const result = await Instagram.findOne();
  return result;
};

const getInstagramData = async (): Promise<any> => {
  try {
    const instagramRecord = await Instagram.findOne();
    if (!instagramRecord) {
      throw new Error("No Instagram token found.");
    }

    const token = instagramRecord.token;

    const response = await axios.get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}`
    );

    return response.data;
  } catch (error: any) {
    throw new Error(JSON.stringify(error.response?.data?.error));
  }
};

const getSingleInstagram = async (id: string): Promise<IInstagram | null> => {
  const result = await Instagram.findById(id);
  return result;
};

const updateInstagramToken = async (
  token: string,
  newToken: string
): Promise<IInstagram | null> => {
  console.log("🚀 ~ newToken:", newToken);
  const result = await Instagram.findOneAndUpdate(
    { token: token },
    { token: newToken }, // Update the token with the same value
    {
      new: true,
    }
  );
  console.log("🚀 ~ result:", result);
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
  getInstagramData,
  getSingleInstagram,
  updateInstagramToken,
  deleteInstagramToken,
};
