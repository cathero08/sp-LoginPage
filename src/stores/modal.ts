
export interface API_FBLOGIN_Response {
  status?: String, //connected 這位用戶已登入 Facebook，且已登入您的網頁。 not_authorized 這位用戶已登入 Facebook，但尚未登入您的網頁。 unknown 這位用戶未登入 Facebook，因此無法得知對方是否已登入您的網頁；或者之前已呼叫 FB.logout()，因此無法連結至 Facebook。
  authResponse?: {
      accessToken?: String, //這位網頁用戶的存取權杖。
      data_access_expiration_time?: Number,
      expiresIn?: Number, //權杖到期時的 UNIX 時間戳記。權杖到期後，該用戶必須重新登入。
      reauthorize_required_in?: String, //登入到期且該用戶需重新登入之前的時間（以秒為單位）。
      signedRequest?: String, //已簽署的參數，其中包含這位網頁用戶的資訊。
      userID?: String //這位網頁用戶的編號。
  }
}
export interface API_GOOGLELOGIN_Response {
  iss: String, // The JWT's issuer
  nbf:  Number,
  aud: String, // Your server's client ID
  sub: String, // The unique ID of the user's Google Account
  hd: String, // If present, the host domain of the user's GSuite email address
  email: String, // The user's email address
  email_verified: Boolean, // true, if Google has verified the email address
  azp: String,
  name: String,
  picture: String, // If present, a URL to user's profile picture
  given_name: String,
  family_name: String,
  iat: Number, // Unix timestamp of the assertion's creation time
  exp: Number, // Unix timestamp of the assertion's expiration time
  jti: String
}