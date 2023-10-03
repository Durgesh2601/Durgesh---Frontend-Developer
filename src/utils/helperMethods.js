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

export const getFilteredData = (searchCriteria, data) => {
  return (data || []).filter((item) => {
    const { status, original_launch, type } = searchCriteria;
    const {
      status: itemStatus,
      original_launch: itemLaunch,
      type: itemType,
    } = item;

    const statusMatch =
      !status || itemStatus?.toLowerCase() === status?.toLowerCase();
    const launchMatch =
      !original_launch || itemLaunch?.includes(original_launch);
    const typeMatch = !type || itemType?.toLowerCase() === type?.toLowerCase();

    return statusMatch && launchMatch && typeMatch;
  });
};
