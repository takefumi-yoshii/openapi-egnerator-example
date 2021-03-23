import type { AxiosResponse } from "axios";
import { DefaultApiFactory } from "../openapi/dist/api";
// ______________________________________________________
//
export const api = DefaultApiFactory();
// ______________________________________________________
//
// InferResponseBody from Axios apiFactory
//
type InferPromise<T> = T extends (...arg: any[]) => Promise<infer I>
  ? I
  : never;
type InferAxiosResonse<T> = T extends AxiosResponse<infer I> ? I : never;
type InferResponseBody<T> = {
  [K in keyof T]: InferAxiosResonse<InferPromise<T[K]>>;
};
export type ResponseBody = InferResponseBody<typeof api>;
// ______________________________________________________
//
// InferRequestBody from Axios apiFactory
//
type InferSecondFromBack<T> = T extends [...any[], infer U, any] ? U : never;
type InferFunctionArgs<T> = T extends (...arg: infer U) => any
  ? Required<U>
  : never; // transform Required for optional
type InferRequestBody<T> = {
  [K in keyof T]: InferSecondFromBack<InferFunctionArgs<T[K]>>;
};
export type RequestBody = InferRequestBody<typeof api>;
