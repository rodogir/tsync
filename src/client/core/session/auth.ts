import Auth0Lock from "auth0-lock";

const clientId = "pkeI_yMD6HuLsf12zPy_yPvL1-yvNZHZ";
const domain = "tsync.eu.auth0.com";

const lock = new Auth0Lock(clientId, domain, {
  auth: {
    redirect: false,
    responseType: "token",
  },
  closable: false,
});

function show() {
  return lock.show();
}

interface AuthResult {
  accessToken: string;
  idToken: string;
  refreshToken: string;
}

function onAuthenticated(callback: (authResult: AuthResult) => void) {
  lock.on("authenticated", (authResult: AuthResult) => {
    callback(authResult);
    lock.hide();
  });
}

export default lock;
export { show, onAuthenticated, AuthResult };
