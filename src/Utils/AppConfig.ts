class AppConfig {
  //   Backend urls:
//   private readonly appBaseUrl = "http://localhost:4000/api";
//   public readonly csrfTokenUrl = `${this.appBaseUrl}/csrf-token`;
//   public readonly contactUsUrl = `${this.appBaseUrl}/contact-us/`;
//   public readonly contactsUrl = `${this.appBaseUrl}/contacts`;
//   public readonly exercisesUrl = `${this.appBaseUrl}/exercises/`;
//   public readonly trainingPlansUrl = `${this.appBaseUrl}/training-plans/`;
//   public readonly trainingPlansNamesUrl = `${this.appBaseUrl}/training-plans/names/user/`;
//   public readonly trainingPlanWeekUrl = `${this.appBaseUrl}/training-plans/week/`;
//   public readonly currentWeeklyData = `${this.appBaseUrl}/training-plans/current/user/`;
//   public readonly setDetailsUrl = `${this.appBaseUrl}/week/`;
//   public readonly fitnessDataUrl = `${this.appBaseUrl}/fitness-data/`;
//   public readonly usersUrl = `${this.appBaseUrl}/users/`;
//   public readonly loginUrl = `${this.appBaseUrl}/login/`;
//   public readonly registerUrl = `${this.appBaseUrl}/register/`;
//   public readonly resetPasswordRequest = `${this.appBaseUrl}/password-reset-request/`;
//   public readonly validateResetPasswordToken = `${this.appBaseUrl}/validate-reset-token/`;
//   public readonly changePassword = `${this.appBaseUrl}/change-password/`;
//   public readonly axiosOptions = {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   };

  private readonly appBaseUrl = "https://am-fitness-server.onrender.com/api";
  public readonly csrfTokenUrl = `${this.appBaseUrl}/csrf-token`;
  public readonly contactUsUrl = `${this.appBaseUrl}/contact-us/`;
  public readonly contactsUrl = `${this.appBaseUrl}/contacts`;
  public readonly exercisesUrl = `${this.appBaseUrl}/exercises/`;
  public readonly trainingPlansUrl = `${this.appBaseUrl}/training-plans/`;
  public readonly trainingPlansNamesUrl = `${this.appBaseUrl}/training-plans/names/user/`;
  public readonly trainingPlanWeekUrl = `${this.appBaseUrl}/training-plans/week/`;
  public readonly currentWeeklyData = `${this.appBaseUrl}/training-plans/current/user/`;
  public readonly setDetailsUrl = `${this.appBaseUrl}/week/`;
  public readonly fitnessDataUrl = `${this.appBaseUrl}/fitness-data/`;
  public readonly usersUrl = `${this.appBaseUrl}/users/`;
  public readonly loginUrl = `${this.appBaseUrl}/login/`;
  public readonly registerUrl = `${this.appBaseUrl}/register/`;
  public readonly resetPasswordRequest = `${this.appBaseUrl}/password-reset-request/`;
  public readonly validateResetPasswordToken = `${this.appBaseUrl}/validate-reset-token/`;
  public readonly changePassword = `${this.appBaseUrl}/change-password/`;
  public readonly axiosOptions = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
}

export const appConfig = new AppConfig();
