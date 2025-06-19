import { get } from "../index";
import type { UserInfoItem } from "../../lib/data/getUsersData";

export const usersUrl =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

export const getUsers = (
  orgName: string,
  userName: string,
  email: string,
  phoneNumber: string
): Promise<UserInfoItem[]> => {
  const url =
    usersUrl +
    `${orgName ? "?orgName=" + orgName : ""}` +
    `${
      orgName && userName
        ? "&userName=" + userName
        : !orgName && userName
        ? "?userName=" + userName
        : ""
    }` +
    `${
      (orgName || userName) && email
        ? "&email=" + email
        : !(orgName || userName) && email
        ? "?email=" + email
        : ""
    }` +
    `${
      (orgName || userName || email) && phoneNumber
        ? "&phoneNumber=" + phoneNumber
        : !(orgName || userName || email) && phoneNumber
        ? "?phoneNumber=" + phoneNumber
        : ""
    }`;

  return get<UserInfoItem[]>(url); // ✅ typed response
};

export const getSingleUser = (userId: string | undefined) =>
  get(`${usersUrl}/${userId}`);
