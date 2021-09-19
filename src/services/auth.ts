import axios from "axios";
import { LOCAL_STORAGE_TOKEN_KEY_NAME, USER_API_URL } from "../constants/auth";
import { SigninReqType } from "../types/auth";

export async function signinAsync(reqData: SigninReqType): Promise<void> {
  const res = await axios.post(USER_API_URL, reqData);
  return res.data.token;
}

export async function logoutAsync(token: string): Promise<void> {
  await axios.delete(USER_API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function getTokenFromLS(): string | null {
  return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
}

export function setTokenToLS(token: string): void {
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY_NAME, token);
}

export function removeTokenFromLS(): void {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY_NAME);
}
