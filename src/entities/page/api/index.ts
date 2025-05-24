import { API_URL } from "@/src/shared/api";

export const pageApi = {
  default: (alias: string) => `${API_URL}/top-page/byAlias/${alias}`,
};
