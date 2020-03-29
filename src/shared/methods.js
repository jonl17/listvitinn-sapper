const today = new Date();
export const generateSyningarQueryParam = filter => {
  switch (filter) {
    case "opna bráðum":
      return {
        content_type: "exhibition",
        order: "fields.title",
        "fields.opnun[gt]": today
      };
    case "opnar":
      return {
        content_type: "exhibition",
        order: "fields.title",
        "fields.opnun[lte]": today,
        "fields.lokun[gte]": today
      };
    case "afstaðnar":
      return {
        content_type: "exhibition",
        order: "fields.title",
        "fields.lokun[lt]": today
      };
    default:
      return {
        content_type: "exhibition",
        order: "fields.title"
      };
  }
};
