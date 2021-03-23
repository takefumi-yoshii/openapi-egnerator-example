import { api, ResponseBody, RequestBody } from "./api";
// ______________________________________________________
//
// Get TypeDefinitions by OperationID
//
type T1 = ResponseBody["usersGet"];
type T2 = ResponseBody["usersUserIdGet"];
type T3 = RequestBody["usersUserIdPatch"];
type T4 = RequestBody["usersPost"];
// ______________________________________________________
//
// assert type alias
//
export const o1 = {} as T1;
export const o2 = {} as T2;
export const o3 = {} as T3;
export const o4 = {} as T4;
//
// check infer result
//
// o1.users
// o2.age
// o3.id
// o4.name
// ______________________________________________________
//
export async function main() {
  try {
    const { data } = await api.usersGet();
    const usersId = data.users.map((user) => user.id);
    console.log(usersId);
  } catch (err) {
    console.log(err);
  }
}
