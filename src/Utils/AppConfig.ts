class AppConfig {
  // Backend urls:
  private readonly appBaseUrl = "https://am-fitness-server.onrender.com/api";
  public readonly csrfTokenUrl = `${this.appBaseUrl}/csrf-token`;
  public readonly contactUsUrl = `${this.appBaseUrl}/contact-us/`;
  public readonly loginUrl = `${this.appBaseUrl}/login/`;
  public readonly registerUrl = `${this.appBaseUrl}/register/`;
  public readonly resetPasswordRequest = `${this.appBaseUrl}/password-reset-request/`;
  public readonly validateResetPasswordToken = `${this.appBaseUrl}/validate-reset-token/`;
  public readonly changePassword = `${this.appBaseUrl}/change-password/`;
}

export const appConfig = new AppConfig();
