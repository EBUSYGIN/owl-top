import { API_URL } from "@/src/shared/api";

export const courseApi = {
  getAllByCategory: () => `${API_URL}/product/find`,
  createReview: () => `${API_URL}/review/create-demo`,
};
