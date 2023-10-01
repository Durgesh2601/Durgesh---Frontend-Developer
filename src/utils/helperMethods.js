import { ITEMS_PER_PAGE } from "../constants";

export const getCurrentPageData = (data, currentPage) => {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  return data?.slice(startIndex, endIndex);
};
