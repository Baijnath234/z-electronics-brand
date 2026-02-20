import api from "./api";

export const getProductsApi = () => api.get("/products");

export const addProductApi = (data: any) =>
  api.post("/products", data);

export const updateProductApi = (id: string, data: any) =>
  api.put(`/products/${id}`, data);

export const deleteProductApi = (id: string) =>
  api.delete(`/products/${id}`);
