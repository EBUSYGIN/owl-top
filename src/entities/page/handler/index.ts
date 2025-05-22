import { pageApi } from "../api";
import { PageInfo } from "../types";

const getPageInfo = async (alias: string) => {
  try {
    const response = await fetch(pageApi.default(alias));
    const data: PageInfo = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const pageHandler = {
  getPageInfo,
};
