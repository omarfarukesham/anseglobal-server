import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { seoService } from "./seo.service";

const createSEO = catchAsync(async (req, res) => {
  const payload = {
    ...req.body,
  };
  console.log(req.body);
  const result = await seoService.createSEO(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "SEO entry created successfully",
    data: result,
  });
});

const getAllSEOs = catchAsync(async (req, res) => {
  const result = await seoService.getAllSEOs(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "All SEO entries retrieved successfully",
    data: result,
  });
});

const getSingleSEO = catchAsync(async (req, res) => {
  // const seoId = req.params.id;
  const pageSlug = req.params.slug;
  const result = await seoService.getSingleSEO(pageSlug);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "SEO entry retrieved successfully",
    data: result,
  });
});

const updateSEO = catchAsync(async (req, res) => {
  const seoId = req.params.id;
  const body = req.body;

  const result = await seoService.updateSEO(seoId, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "SEO entry updated successfully",
    data: result,
  });
});

const deleteSEO = catchAsync(async (req, res) => {
  const seoId = req.params.id;

  await seoService.deleteSEO(seoId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "SEO entry deleted successfully",
    data: {},
  });
});

export const seoController = {
  createSEO,
  getAllSEOs,
  getSingleSEO,
  updateSEO,
  deleteSEO,
};
