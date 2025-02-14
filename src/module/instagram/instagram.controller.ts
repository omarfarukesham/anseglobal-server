import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { instagramService } from "./instagram.service";

const createInstagramToken = catchAsync(async (req: Request, res: Response) => {
  const newInstagram = await instagramService.createInstagramToken(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Token added successfully",
    data: newInstagram,
  });
});

const getInstagramToken = catchAsync(async (req: Request, res: Response) => {
  const instagramToken = await instagramService.getInstagramToken();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Instagram records fetched successfully",
    data: instagramToken,
  });
});

const getInstagramData = catchAsync(async (req: Request, res: Response) => {
  const instagramData = await instagramService.getInstagramData();
  console.log("🚀 ~ getInstagramData ~ instagramData:", instagramData);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Instagram data fetched successfully",
    data: instagramData,
  });
});

const updateInstagramToken = catchAsync(async (req: Request, res: Response) => {
  const { token } = req.params;
  const { newToken } = req.body;
  console.log(req.body);
  const updatedInstagram = await instagramService.updateInstagramToken(
    token,
    newToken
  );

  if (!updatedInstagram) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Instagram record not found" });
    return;
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Instagram Token Updated successfully",
    data: {},
  });
});

const getInstagramById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const instagram = await instagramService.getSingleInstagram(id);

  if (!instagram) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Instagram record not found" });
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Instagram record fetched successfully",
    data: instagram,
  });
});

const deleteInstagramToken = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const instagram = await instagramService.deleteInstagramToken(id);

  if (!instagram) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Instagram record not found" });
    return;
  }

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Instagram record deleted successfully",
    data: {},
  });
});

export const instagramController = {
  createInstagramToken,
  getInstagramToken,
  getInstagramData,
  getInstagramById,
  updateInstagramToken,
  deleteInstagramToken,
};
