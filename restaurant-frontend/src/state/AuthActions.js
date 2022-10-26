//ユーザー入力に応じたactionの設定を開始
export const LoginStart = (user) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  paylodad: user,
});

export const LoginError = (error) => ({
  type: "LOGIN_ERROR",
  payload: error,
});
