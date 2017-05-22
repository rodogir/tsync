import { getToken } from "../session/token";
import fetch from "./fetch";

async function authenticatedFetch(input: RequestInfo, init: RequestInit) {
  const headers = init.headers || new Headers();
  headers.set("tsync-auth", getToken());
  init.headers = headers;
  return fetch(input, init);
}

export async function verifyToken() {
  return authenticatedFetch(
    "/api/v1/verify-token",
    {
      method: "GET",
    });
}
