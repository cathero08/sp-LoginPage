
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