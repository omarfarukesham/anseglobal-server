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
  const instagrams = await instagramService.getInstagramToken();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Instagram records fetched successfully",
    data: instagrams,
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
  getInstagramById,
  deleteInstagramToken,
};
