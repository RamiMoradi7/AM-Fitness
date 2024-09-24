import axios from "axios";

class Interceptors {
  public listen(): void {
    axios.interceptors.request.use((request) => {
      // Set the Authorization header
      const token = sessionStorage.getItem("token");
      if (token) {
        request.headers.Authorization = `Bearer ${token}`;
      }

      // Set the CSRF token header
      if (window.csrfToken) {
        request.headers["X-CSRF-Token"] = window.csrfToken;
      }

      request.withCredentials = true;
      return request;
    });
  }
}

// Create an instance of the Interceptors class
export const interceptors = new Interceptors();
