import api from "./api";

export const loginApi = (data: {
  email: string;
  password: string;
  role: string;
}) => api.post("/auth/login", data);

export const signupApi = (data: any) =>
  api.post("/auth/signup", data);

export const getProfileApi = () =>
  api.get("/auth/profile");
