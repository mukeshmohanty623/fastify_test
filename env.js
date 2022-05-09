export const ENV = {
    secureSession: {
      secretKey: process.env.SECRET_KEY_SECURE_SESSION,
      salt: process.env.SALT_SECURE_SESSION,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_REDIRECT_URI,
    },
    microsoft: {
      clientId: process.env.MICROSOFT_CLIENT_ID,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
      redirectUri: process.env.MICROSOFT_REDIRECT_URI,
    },
    okta: { redirectUri: process.env.OKTA_REDIRECT_URI },
    sslCertificateKey: process.env.SSL_CERTIFICATE_KEY,
    sslCertificatePrivateKey: process.env.SSL_CERTIFICATE_PRIVATE_KEY,
    db: {
      user: process.env.DB_USER,
      userPassword: process.env.DB_USER_PASSWORD,
      host: process.env.DB_HOST,
      name: process.env.DB_NAME,
      port: process.env.DB_PORT,
    },
    scriptSourceUrl:process.env.SCRIPT_SOURCE_URL,
    cookieDomainName:process.env.COOKIE_DOMAIN_NAME
  };