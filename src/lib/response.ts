import { BUSINESS_STATUS_CODE } from "@/config/consts";

export const success = <T>(
  data?: T,
  message = "Success",
  status = BUSINESS_STATUS_CODE.SUCCESS,
) => {
  return { status, message, data };
};

export const error = <T>(
  err: T,
  message = "Internal Server Error",
  status = BUSINESS_STATUS_CODE.ERROR
) => {
  return { err, status, message };
};