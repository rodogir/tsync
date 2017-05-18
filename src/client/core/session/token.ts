
const TOKEN_IDENTIFIER = "tsync-auth-token";

function setToken(token: string) {
  localStorage.setItem(TOKEN_IDENTIFIER, token);
}

function getToken(): string {
  return localStorage.getItem(TOKEN_IDENTIFIER);
}

export {
  setToken,
  getToken,
};
