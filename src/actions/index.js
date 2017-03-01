export const AUTHORIZE_USER = "AUTHORIZE_USER";

export function login() {
  return {
    type: AUTHORIZE_USER,
    isLoggedIn: true
  }
}
