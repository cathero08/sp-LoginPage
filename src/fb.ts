
export const fbJsdk = () => {
    (window as any).fbAsyncInit = function() {
    // @ts-ignore：
    // eslint-disable-next-line no-undef
    FB.init({
      appId      : '655914392423313',
      cookie     : true,                     // Enable cookies to allow the server to access the session.// 启用 cookie 以允许服务器访问会话。
      xfbml      : true,                     // Parse social plugins on this webpage.// 解析此网页上的社交插件。
      version    : 'v15.0'           // Use this Graph API version for this call.// 将此 Graph API 版本用于此调用。
    });
  }
}
