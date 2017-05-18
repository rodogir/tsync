import { getToken } from "../session/token";

async function authenticatedFetch(input: RequestInfo, init: RequestInit) {
  const headers = init.headers || new Headers();
  headers.set("tsync-auth", getToken());
  init.headers = headers;
  return fetch(input, init).then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error("Network response was not ok.");
  });
}

export async function verifyToken() {
  return authenticatedFetch(
    "/api/v1/verify-token",
    {
      method: "GET",
    });
}
