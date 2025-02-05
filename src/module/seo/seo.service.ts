import QueryBuilder from "../../builder/querybuilder";
import { ISEO } from "./seo.interface";
import SEO from "./seo.model";

const createSEO = async (payload: ISEO): Promise<ISEO> => {
  const result = await SEO.create(payload);
  return result;
};

const getAllSEOs = async (query: Record<string, unknown>) => {
  const searchableFields = ["pageUrl", "metaTitle", "metaDescription", "slug"];

  const seos = new QueryBuilder(SEO.find(), query)
    .search(searchableFields)
    .filter()
    .sort()
    .select();

  const result = await seos.modelQuery;
  return result;
};

const getSingleSEO = async (id: string) => {
  const result = await SEO.findById(id);
  return result;
};

const updateSEO = async (id: string, data: Partial<ISEO>) => {
  const result = await SEO.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

const deleteSEO = async (seoId: string) => {
  const result = await SEO.findByIdAndDelete(seoId);
  if (!result) {
    throw new Error("SEO entry could not be deleted");
  }
  return result;
};

export const seoService = {
  createSEO,
  getAllSEOs,
  getSingleSEO,
  updateSEO,
  deleteSEO,
};
