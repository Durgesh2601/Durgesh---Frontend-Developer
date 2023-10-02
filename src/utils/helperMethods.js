import { ITEMS_PER_PAGE } from "../constants";

export const getCurrentPageData = (data, currentPage) => {
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  return data?.slice(startIndex, endIndex);
};

const captilizeFirstLetter = (key) => {
  // Capitalize the first letter of each word in the key
  const capitalizedKey = key
    ?.split("_") // Split the key by underscores
    .map((word) => word?.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    ?.join(" "); // Join the words back together with spaces
  return capitalizedKey;
};

export const getTransformedData = (capsule = {}) => {
  const { missions, ...rest } = capsule || {};
  const transformedData = Object.entries(rest).map(([key, value]) => {
    return {
      key: captilizeFirstLetter(key),
      value,
    };
  });
  return { missions, transformedData };
};
